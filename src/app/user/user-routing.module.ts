import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ChangePaswordComponent } from './change-password/change-password.component';
import { SignUpComponent } from './signup/signup.component';
import { VerifyRegistrationComponent } from './verify-registration/verify-registration.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: SigninComponent
      },
      {
        path: 'change_password',
        component: ChangePaswordComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: 'verifyUserRegistration',
        component: VerifyRegistrationComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
