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
    items = [];
    private username: string;
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
    url: string;
    description: string;
    homepage: string;
    clone_url: string;
}
this.http.get<ApiResponse>(environment.apiUrl + username + environment.apiRepokey).subscribe(response => {
  for (let index = 0; index < response.length; index++) {
    console.log(response[index]);
    this.repo.name = response[index].name;
    this.repo.url = response[index].url;
    this.repo.description = response[index].description;
    this.repo.homepage = response[index].homepage;
    this.repo.clone_url = response[index].clone_url;
  });
}