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
  repo: Repo;
   constructor(private profileService: ProfileService, public repoService: ProfileService) {
    // console.log(this.repoService.getRepoInfo(this.username));

   }
   ngOnInit() {
  
    
  }
 }