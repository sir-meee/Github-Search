import { Injectable } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Repo} from '../repo';
 @Injectable({
  providedIn: 'root'
})
export class ProfileService {
    user: User;
    repo: Repo;
    // private username = 'sir-meee';
  constructor(private http: HttpClient) {
    this.user = new User (' ', ' ', ' ', ' ', ' ', 0, ' ');
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
    // error => {
    //     username = 'daneden';
    //         reject(error);
    //     }
    );
});
return promise;
}
getRepoInfo(username) {
    interface ApiResponse {
      name: string;
      description: string;
      homepage: string;
      clone_url: string;
      url: string;
   }
  const promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>(environment.apiUrl + username + environment.apiRepokey).toPromise().then(response => {
         this.repo.name = response.name;
        this.repo.description = response.description;
        this.repo.homepage = response.homepage;
        this.repo.clone_url = response.clone_url;
        this.repo.url = response.url;
        console.log(response);
         resolve();
    },
    // error => {
    //         username = 'daneden';
    //         reject(error);
    //     }
    );
});

return promise;
  }
}