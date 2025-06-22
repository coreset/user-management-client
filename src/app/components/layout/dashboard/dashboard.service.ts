import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  private apiUrl = environment.apiUrl;


  test(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth`).pipe(
      tap((response: any) => {
        // Handle successful response (logging, data transformation, etc.)
      }),
      catchError((error: any) => {
        // Handle errors (logging, user notification, etc.)
        console.error('API Error:', error);

        // Re-throw the error for component-level handling
        return throwError(() => new Error(
          error.message || 'An unknown error occurred'
        ));
      })
    );
  }

}
