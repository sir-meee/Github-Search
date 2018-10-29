import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repo} from '../repo';
import {ProfileService} from '../profiles/profile.service';
 @Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
  providers: [ProfileService]
})
export class RepositoriesComponent implements OnInit {
  public username = 'owenmur21';
  repo: Repo;
   constructor(private profileService: ProfileService) { }
   ngOnInit() {
    this.profileService.getRepoInfo(this.username);
    this.repo = this.profileService.repo;
  }
 }