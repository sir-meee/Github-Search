import { Injectable } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Repo} from '../repo';
 @Injectable({
  providedIn: 'root'
})
export class ProfileService {
    repo: Repo; 
    user: User;
    
    private username: string;
    items;
  constructor(private http: HttpClient) {
    this.user = new User (' ', ' ', ' ', ' ', ' ', 0, ' ');
    this.repo = new Repo (' ', ' ', ' ', ' ', ' ');
  }
   getProfileInfo(username) {
    interface ApiResponse {
        name: string;
        login: string;
        avatar_url: string;
        email: string;
        location: string;
        public_repos: number;
        html_url: string;
  }
  const promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>(environment.apiUrl + username + environment.apikey).toPromise().then(profile => {
         this.user.name = profile.name;
        this.user.login = profile.login;
        this.user.avatar_url = profile.avatar_url;
        this.user.email = profile.email;
        this.user.location = profile.location;
        this.user.public_repos = profile.public_repos;
        this.user.html_url = profile.html_url;

        console.log(profile);
         resolve();
    },
    
    );
});
return promise;
}
getRepoInfo(username) {
  interface ApiResponse {
    name: string;
    homepage: string;
    description: string;
    html_url: string;
    clone_url: string;
}
this.http.get<ApiResponse>(environment.apiUrl + username + environment.apiRepokey).subscribe(response => {
  
    this.items = response;  
  });
}
}