import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './user/_guards/authentication.guard';
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
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
