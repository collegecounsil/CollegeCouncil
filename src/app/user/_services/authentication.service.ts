import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  redirectUrl: string;

  constructor (
    private router: Router
   ) {}

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  login() : void {
    localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true);
    if(this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    } else {
      this.router.navigate(['/']);
    }
  }

  logout() : void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.router.navigate(['login']);
  }

  private hasToken() : boolean {

    setTimeout(() => {
      this.isLoginSubject.next(true);
    }, 5000);

    return !!localStorage.getItem('token');
  }
}