import { Component, OnInit } from '@angular/core';
import { userProfileData } from '../Json-data/user-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;
  constructor() { }
  ngOnInit() {
    this.userData = userProfileData;
  }

}
