import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
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
      SharedModule
  ],
  providers: [
      AuthService,
      AuthGuard
  ]
})
export class UserModule { }

