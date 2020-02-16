import { AuthService } from './../../security/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  btnTestApiLabel = 'Test API';
  apiTestResponse = null;

  constructor(
    private httpClient: HttpClient,
    private auth: AuthService
  ) {

  }

  ngOnInit(): void {
  }

  onApiTest(): void {
    this.apiTestResponse = '<loading>';

    this.httpClient.get('http://angulara.local/api')
      .subscribe((data: any) => {
        this.apiTestResponse = data;
      }, (err: HttpErrorResponse) => {
        this.apiTestResponse = err.statusText;
      });
  }
}
