import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  GridModule,
  MediaQueryModule
} from 'projects/ux/src/public_api';

import { MediaQueryDemoRoutingModule } from './media-query-demo-routing.module';
import { MediaQueryDemoComponent } from './media-query-demo.component';

@NgModule({
  declarations: [MediaQueryDemoComponent],
  imports: [
    CommonModule,
    GridModule,
    MediaQueryModule,
    MediaQueryDemoRoutingModule
  ]
})
export class MediaQueryDemoModule { }
