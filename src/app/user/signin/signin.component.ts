import { Component } from '@angular/core';
import { AuthService } from '../_services/authentication.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  signInFormGroup: FormGroup;

  constructor(public authService: AuthService, private fb: FormBuilder) {
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
