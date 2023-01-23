import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ReactiveFormsModule } from '@angular/forms';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,    
    BrowserAnimationsModule,
    //ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
