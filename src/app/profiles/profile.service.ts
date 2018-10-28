import { Injectable } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
 @Injectable({
  providedIn: 'root'
})
export class ProfileService {
    user: User;
  constructor(private http: HttpClient) {
    this.user = new User (' ', ' ', ' ');
  }
   getProfileInfo(username) {
    interface ApiResponse {
        name: string;
        login: string;
        avatar_url: string;
  }
  const promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>(environment.apiUrl + username + environment.apikey).toPromise().then(profile => {
         this.user.name = profile.name;
        this.user.login = profile.login;
        this.user.avatar_url = profile.avatar_url;
        console.log(profile);
         resolve();
    },
    error => {
        this.user.name = 'daneden';
            reject(error);
        }
    );
});
return promise;
}
}