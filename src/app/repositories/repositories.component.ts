import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileService} from '../profiles/profile.service';
import {Repo} from '../repo';

 @Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers: [ProfileService]
})
export class RepositoriesComponent implements OnInit {
  public username = 'owenmur21';
  repo: Repo;
  items = [];
   constructor(private profileService: ProfileService, private repoService: ProfileService) { }
   ngOnInit() {
    this.profileService.getProfileInfo(this.username);
    
  }
 }