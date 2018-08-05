import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { Carousel3Component } from './carousel3/carousel3.component';
import { LoaderSvgComponent } from './loader-svg/loader-svg.component';



@NgModule({
  declarations: [
    AppComponent,
    Carousel3Component,
    LoaderSvgComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
