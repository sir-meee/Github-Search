import { Component, OnInit } from '@angular/core';
import {Searching} from '../searching';
import { ProfileService } from '../profiles/profile.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],

})
export class ProfileFormComponent implements OnInit {
  newSearching = new Searching('');
  // @Output() getName = new EventEmitter<Searching>();
   submitSearch(name) {
      // this.getName.emit(this.newSearching);
      // this.newSearching = new Searching('');
      console.log(name.value);
      this.profileService.getProfileInfo(name.value);
  }
   constructor(private profileService: ProfileService) { }
  ngOnInit() {
  }
 }