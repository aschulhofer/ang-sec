import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Profile } from './profile.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  private apiBase = 'http://angulara.local/api';

  constructor(private httpClient: HttpClient) {

  }

  getActiveProfile(): Observable<Profile> {
    return this.httpClient.get<Profile>(`${this.apiBase}/user`).pipe(
      map((data: any) => {
        return data.data;
      })
    );
  }
}
