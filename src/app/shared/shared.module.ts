import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
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
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
        ],
    providers: [
    ]
})
export class SharedModule { }