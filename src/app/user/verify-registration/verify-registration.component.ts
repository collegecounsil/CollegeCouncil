import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/_services/api.service';

@Component ({
    selector:'verify-registration',
    templateUrl: './verify-registration.component.html'
})

export class VerifyRegistrationComponent implements OnInit {

    constructor(private route: Router, private router: ActivatedRoute, private apiService: ApiService) {

    }
    ngOnInit() {
       console.log(this.router.snapshot.queryParams['key']);
       if(this.router.snapshot.queryParams['key']) {
        this.apiService.post('user/verifyRegistration', {key: this.router.snapshot.queryParams['key']}).subscribe((res => {
            console.log(res);
        }));
       }
    }
}