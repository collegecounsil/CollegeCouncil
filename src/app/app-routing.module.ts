import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './user/_guards/authentication.guard';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
        canLoad: [AuthGuard]
      },
      { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { 
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
