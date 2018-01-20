import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-change-password',
  templateUrl: 'change-password.component.html'
})
export class ChangePaswordComponent implements OnInit {
  changePasswordFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {}
}
