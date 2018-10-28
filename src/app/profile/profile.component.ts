import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {ProfileService} from '../profiles/profile.service';
 @Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {
    public username = 'sir-meee';
    user: User;
    findUser(username) {
        this.username  = username;
        this.ngOnInit();
      }
   constructor(private profileService: ProfileService) { }
   ngOnInit() {
    this.profileService.getProfileInfo(this.username);
    this.user = this.profileService.user;
 }
 }