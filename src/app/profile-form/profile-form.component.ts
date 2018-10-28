import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ProfileService} from '../profiles/profile.service';
 @Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
  providers: [ProfileService]
})
export class ProfileFormComponent implements OnInit {
user:User;
  constructor(private profileService: ProfileService) { }
// findProfile(){
//   this.profileService.updateProfile(this.user.username);
// }
  ngOnInit() {
  }
 }