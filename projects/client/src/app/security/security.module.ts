import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/unauthenticated.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SecurityRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [
    LoginComponent,
  ]
})
export class SecurityModule { }
