import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {
  catchError,
  filter,
  switchMap,
  take
} from 'rxjs/operators';
import { LoginService } from 'src/app/pages/login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private readonly authService: LoginService,
  ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // skip adding token for following endpoints
    if (
      request.url.includes('/auth/login')
      || request.url.includes('/auth/refresh')
      || request.url.includes('/auth/forgot-password')
      || request.url.includes('/auth/verify-identifier')
    ) {
      console.log("pass without interceptor ...", request.url);
      return next.handle(request);
    }

    // add refresh tokens for 'signout' and 'signout/all' requests.
    if (
      request.url.includes('/auth/signout')
      || request.url.includes('/auth/signout/all')
    ) {
      const refreshToken = this.authService.getRefreshToken();

      if (!refreshToken) {
        // No refresh token found
        this.authService.logout(); // redirect to login
        // Show toast message if you use a notification service
        return throwError(() => new Error("Refresh token not found"));
      }

      // use refresh token for signout
      const authRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${refreshToken}` }
      });

      return next.handle(authRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // if refresh token expired
            //this.authService.logout(); // logout and redirect to login
            return throwError(() => error);
          } else {
            // for other types of errors
            return throwError(() => error);
          }
        })
      );
    }


    // Add access token by default
    const accessToken = this.authService.getAccessToken();
    const authRequest = accessToken
      ? request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}`}})
      : request;

    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401Error(authRequest, next);
        }
        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: {token: string, refreshToken: string}) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.token);
          return next.handle(this.addTokenHeader(request, token.token));
        }),
        catchError((err) => {
          this.isRefreshing = false;
          this.authService.logout();
          return throwError(() => err);
        })
      );
    }

    return this.refreshTokenSubject.pipe(
      filter(token => token !== null), // wait until token is available
      take(1), // only first one take
      switchMap((token) => next.handle(this.addTokenHeader(request, token!)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
}


