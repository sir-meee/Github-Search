import { Injectable } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
 @Injectable({
  providedIn: 'root'
})
export class ProfileService {
    user: User;
  constructor(private http: HttpClient) {
    this.user = new User (' ', '1e09e1baa573d7f49014ffe3db068ea7ce8475cd'  );
  }
   getProfileInfo() {
    interface ApiResponse {
      username: string;
      token;
  }
  let promise =new Promise((resolve, reject) => {
    this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
         this.user.username = response.username;
        this.user.token = response.token;
         resolve();
    },
    error => {
            this.user.username = 'daneden';
            this.user.token = '1e09e1baa573d7f49014ffe3db068ea7ce8475cd';
            reject(error);
        }
    );
});
return promise;
}
}