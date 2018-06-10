import { Injectable, Injector } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../user/_services/authentication.service';
import { ApiService } from './api.service';
@Injectable()
export class ConfigurationService {
    constructor(private http: HttpClient, private injector: Injector,private apiService: ApiService) { }

    init(): Promise<any> {
        return new Promise((resolve, reject) => {
            let authenticationService = this.injector.get(AuthService);
            this.apiService.get('carList').subscribe((res) => {
              console.log(res);
              authenticationService.isLoginSubject.next(true);
              resolve();
            }, error=> {
                console.log(error);
                resolve();
            });
        });
    }

    // Run Application without api(s)

    // init(): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         let authenticationService = this.injector.get(AuthService);
    //         authenticationService.isLoginSubject.next(true);
    //         resolve();
    //     });
    // }
}
