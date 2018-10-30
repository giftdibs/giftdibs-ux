import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { GridModule } from 'projects/ux/src/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
