import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ChangePaswordComponent } from './change-password/change-password.component';
import { SignUpComponent } from './signup/signup.component';
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
      }
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
