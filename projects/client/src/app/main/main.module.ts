import { ProfileService } from './profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileResolverService } from './profile-resolver.service';


@NgModule({
  declarations: [LandingComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  providers: [
    ProfileService,
    ProfileResolverService,
  ]
})
export class MainModule { }
