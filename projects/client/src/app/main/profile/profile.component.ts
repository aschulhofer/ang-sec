import { Profile } from './../profile.model';
import { ProfileService } from './../profile.service';
import { User } from './../../security/user.model';
import { AuthService } from './../../security/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.data.subscribe((data: { profile: Profile }) => {
        console.log(data.profile);
        this.profile = data.profile;
      });
  }

}
