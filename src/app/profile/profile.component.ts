import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {ProfileService} from '../profiles/profile.service';
import {Repo} from '../repo';
 @Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {
    public username = 'sir-meee';
    user: User;
    repo: Repo;
    
   constructor(private profileService: ProfileService, public repoService: ProfileService) { }
   ngOnInit() {
    this.profileService.getProfileInfo(this.username);
    this.user = this.profileService.user;
    this.repoService.getRepoInfo(this.username);
    this.repo = this.repoService.repo;
 }
 }