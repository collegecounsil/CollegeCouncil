import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-info.service';
import { User } from '../../models/user';

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(false);
  redirectUrl: string;
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) { }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  // login(usernameAndPassword): void {
  //   const options = {
  //     headers: this.headers,
  //     withCredentials: true
  //   };
  //   this.http.post('auth', usernameAndPassword, options).subscribe((res) => {
  //     this.isLoginSubject.next(true);
  //     if (this.redirectUrl) {
  //       this.router.navigate([this.redirectUrl]);
  //     } else {
  //       this.router.navigate(['/']);
  //     }

  //   },
  //     error => {
  //       console.log('error');
  //       this.isLoginSubject.next(false);
  //     });
  // }


  // Run Application without api(s)

  login(usernameAndPassword): void {
    this.isLoginSubject.next(true);
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
      this.userService.user = new User();
    } else {
      this.router.navigate(['/']);
    }
  }

  logout(): void {
    this.isLoginSubject.next(false);
    this.router.navigate(['login']);
  }

}