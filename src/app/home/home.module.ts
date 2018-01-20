import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent
    ],
  imports: [
      HomeRoutingModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [
  ]
})
export class HomeModule { }

