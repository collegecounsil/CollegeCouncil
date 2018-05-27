import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from './customValidator.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit{
  signUpFormGroup: FormGroup;
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signUpFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', [Validators.required]]
    }, {
        validator: CustomValidators.Match('password', 'repassword')
      });
  }

  ngOnInit() {
    const options = {
      headers: this.headers,
      withCredentials: true
    };
    this.http.get('carList', options).subscribe((res) => {
      console.log(res);
    });
  }

  validatePassword(fieldControl: FormControl) {
    return fieldControl.value === this.signUpFormGroup.get("password").value ? null : {
      passwordNotMatch: true
    };
  }

  register() {
    console.log(this.signUpFormGroup.value);
    if (this.signUpFormGroup.valid) {
      this.http.post('user/register', this.signUpFormGroup.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}