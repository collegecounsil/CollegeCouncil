
import { Injectable } from '@angular/core';
import { CanActivate, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/authentication.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {
      
    }
    canActivate(): Observable<any> | Promise<any> | boolean {
        return true;
    }

    canLoad(route: Route): Observable<any> | Promise<any> | boolean {
        return this.authService.isLoggedIn().map((res: boolean) => {
            if(res) {
                return true;
            } else {
                this.authService.redirectUrl = window.location.pathname;
                this.router.navigate(['/login']);
                return false;
            }
        }).take(1);
    }
}
