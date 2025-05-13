import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';

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

  private storeTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem(this.refreshTokenKey);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${refreshToken}`
    });
    return this.http.post(`${this.apiUrl}/auth/refresh`, {}, { headers }).pipe(
      tap((res: any) => {
        console.log("res from login service ::", res);
        this.storeTokens(res.token, res.refreshToken);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }






}
