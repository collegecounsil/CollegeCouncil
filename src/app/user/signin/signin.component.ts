import { Component } from '@angular/core';
import { AuthService } from '../_services/authentication.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  signInFormGroup: FormGroup;

  constructor(private router: Router, public authService: AuthService, private fb: FormBuilder) {
    if (authService.isLoggedIn()) {
      router.navigate(['home']);
    }
  }

  ngOnInit() {
    this.signInFormGroup = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if(this.signInFormGroup.valid) {
      this.authService.login(this.signInFormGroup.value);
    }
  }
}
