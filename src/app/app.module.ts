import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SkeltonModule } from './screen-loader/skelton/skelton.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkeltonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
