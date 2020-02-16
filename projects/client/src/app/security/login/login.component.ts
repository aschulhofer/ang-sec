import { AuthServiceError } from './../auth-service-error.model';
import { User } from './../user.model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = null;
  password = null;
  errorMessage = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.errorMessage = null;

    this.authService.login(this.username, this.password).subscribe(
      (user: User) => {
        this.router.navigate(['']);
      },
      (error: AuthServiceError) => {
        if (error.code === 401) {
          this.errorMessage = error.message;
        } else {
          alert(error.message);
        }
      });
  }
}
