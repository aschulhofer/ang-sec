import { ProfileResolverService } from './profile-resolver.service';
import { AuthGuard } from './../security/guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'profile',
    canActivate: [ AuthGuard ],
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService,
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
