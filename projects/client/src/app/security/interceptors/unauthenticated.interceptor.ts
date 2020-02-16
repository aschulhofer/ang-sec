import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpEvent<any>) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log('Unauthenticated request.');
          this.router.navigateByUrl('/login');
        }

        return of(error);
      })
    );
  }
}
