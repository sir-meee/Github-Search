import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ProfileService} from '../profiles/profile.service';
 @Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers: [ProfileService]
})
export class RepositoriesComponent implements OnInit {
  public username = 'owenmur21';
  repos: any;
   constructor(private profileService: ProfileService, private repoService: ProfileService) { }
   ngOnInit() {
    this.profileService.getProfileInfo(this.username);
    this.repos = this.profileService.repos;
  }
 }