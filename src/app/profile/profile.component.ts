import { Component, OnInit } from '@angular/core';
import { userProfileData } from '../Json-data/user-profile';
import { ApiService } from '../core/_services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.userData = userProfileData;
    this.apiService.get('user/user').subscribe((res) => {
      this.userData = res;
    }, error => {
      console.log(error);
    });
  }

}
