import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(false);
  redirectUrl: string;
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(
    private router: Router, private http: HttpClient
  ) { }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  login(usernameAndPassword): void {
    const options = {
      headers: this.headers,
      withCredentials: true
    };
    this.http.post('auth', usernameAndPassword, options).subscribe((res) => {
      this.isLoginSubject.next(true);
      if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
      } else {
        this.router.navigate(['/']);
      }

    },
      error => {
        console.log('error');
        this.isLoginSubject.next(false);
      });
  }

  logout(): void {
    this.isLoginSubject.next(false);
    this.router.navigate(['login']);
  }

}