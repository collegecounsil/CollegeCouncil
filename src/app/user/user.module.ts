import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { ChangePaswordComponent } from './change-password/change-password.component';
import { AuthService } from './_services/authentication.service';
import { AuthGuard } from './_guards/authentication.guard';
@NgModule({
    declarations: [
        SigninComponent,
        ChangePaswordComponent
    ],
  imports: [
      UserRoutingModule,
      ReactiveFormsModule
  ],
  providers: [
      AuthService,
      AuthGuard
  ]
})
export class UserModule { }

