import { Component, OnInit } from '@angular/core';
// import { userProfileData } from '../Json-data/user-profile';
import { ApiService } from '../core/_services/api.service';
import { UserService } from '../services/user-info.service';
import { User, IUser } from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;
  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) { }
  ngOnInit() {
   let dummyUser = {
    firstName: 'Raj',
    lastName: 'Chauhan',
    email: 'world.raj95@gmail.com',
    phone: 7827451932,
    userKey: 'STD-2177e4e2-964e-402d-9a75-0f4ed16539cc',
    profileUrl: '../assets/profile-image.jpg',
    role:'Super Admin',
    address: null,
    college: null,
    };

    this.userService.user = new User(dummyUser);
    this.userData = this.userService.user;
    // this.userData = userProfileData;


    // this.apiService.get('user/user').subscribe((res) => {
    //   this.userData = res;
    // }, error => {
    //   console.log(error);
    // });
  }

}
