import { Observable, of, EMPTY } from 'rxjs';
import { ProfileService } from './profile.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Profile } from './profile.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ProfileResolverService implements Resolve<Profile> {

  constructor(private profileService: ProfileService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Profile | Observable<Profile> | Promise<Profile> {
    return this.profileService.getActiveProfile().pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        return EMPTY;
      })
    );
  }

}
