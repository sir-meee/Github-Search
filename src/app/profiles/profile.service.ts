import { Injectable } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Repo}s from '../repos';
 @Injectable({
  providedIn: 'root'
})
export class ProfileService {
    repos: Repos; 
    user: User;
    private username: string;
  constructor(private http: HttpClient) {
    this.user = new User (' ', ' ', ' ', ' ', ' ', 0, ' ');
    this.repos= new Repos (' ', ' ', ' ', ' ', ' ');
    this.username = 'sir-meee';
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
    url: string;
    description: string;
    homepage: string;
    clone_url: string;
}
const promise = new Promise((resolve, reject) => {
  this.http.get<ApiResponse>(environment.apiUrl + username + environment.apiRepokey).toPromise().then(response => {
    this.repos.name = response.name;
    this.repos.url = response.url;
    this.repos.description = response.description;
    this.repos.homepage = response.homepage;
    this.repos.clone_url = response.clone_url;
    console.log(response);
         resolve();
    },
    resolve();
  },
   );

});

return promise;
}
}