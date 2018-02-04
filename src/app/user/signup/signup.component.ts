import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent {
  signUpFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signUpFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    console.log(this.signUpFormGroup.value);
    this.http.post('register', this.signUpFormGroup.value).subscribe((res) => {
      console.log(res);
    });
  }
}