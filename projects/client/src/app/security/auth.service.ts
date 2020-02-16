import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, of, Observable } from 'rxjs';
import { AuthServiceError } from './auth-service-error.model';

@Injectable()
export class AuthService {

  private apiBase = 'http://angulara.local/api';

  private activeUser: User;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    const body = {
      username,
      password
    };

    return this.httpClient.post<User>(`${this.apiBase}/login`, body).pipe(
      map((data: any) => data.data),
      tap((user: User) => {
        this.activeUser = user;
        localStorage.setItem('user', JSON.stringify(this.activeUser));
      }),
      catchError(error => this.handleError(error))
    );
  }

  logout() {
    this.activeUser = null;
    localStorage.removeItem('user');

    return this.httpClient.get(`${this.apiBase}/logout`).pipe(
      catchError(error => this.handleError(error))
    );
  }

  getActiveUser(): Observable<User> {
    if (!this.activeUser) {
      this.activeUser = this.getUserFromStorage();
    }

    console.log('Return active user', this.activeUser);

    return of(this.activeUser);
  }

  hasActiveUser(): Observable<boolean> {
    return this.getActiveUser().pipe(
      map((user: User) => (!!user))
    );
  }

  private getUserFromStorage(): User {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      return JSON.parse(storedUser);
    }
  }

  private handleError(error: HttpErrorResponse): Observable<AuthServiceError> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);

      if (error.status === 401) {
        return throwError({
          message: 'Invalid credentials supplied.',
          code: error.status,
        });
      }
    }

    return throwError({
      message: 'Something bad happened; please try again later.',
      code: error.status,
    });
  }
}
