import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from 'src/app/shared/utils/constants/auth.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;
  // need to remove
  //private accessTokenKey = 'access_token';
  //private refreshTokenKey = 'refresh_token';

  constructor(
    private readonly http: HttpClient,
  ) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/auth/login`, { email:  username, password }).pipe(
      tap((res: any) => {
        this.storeTokens(res.token, res.refreshToken);
      })
    );
  }

  googleLogin(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/google/login`).pipe(
      tap((res: any) => {
        this.storeTokens(res.token, res.refreshToken);
      })
    );
  }

  private storeTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${refreshToken}`
    });
    return this.http.post(`${this.apiUrl}/auth/refresh`, {}, { headers }).pipe(
      tap((res: any) => {
        this.storeTokens(res.token, res.refreshToken);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  setAccessToken(accessToken: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  }

  setRefreshToken(refreshToken: string): void {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
}
