import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
 @Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User;
   constructor(private http: HttpClient) { }
   ngOnInit() {
    interface ApiResponse {
        username: string;
        token;
    }
    this.http.get<ApiResponse>('https://api.github.com/users/' + this.user.username + '?access_token=' + this.user.token ).subscribe(data=>{
      this.user = new User (data.username, data.token) ;
    }, err => {
        this.user = new User ('https://api.github.com/users/daneden?access_token=1e09e1baa573d7f49014ffe3db068ea7ce8475cd');
        console.log('Error occured');
  });
 }
 }