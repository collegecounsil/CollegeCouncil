import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './services/user-info.service';


@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    UserModule,
    NgbModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
