import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
        ],
    providers: [
    ]
})
export class SharedModule { }