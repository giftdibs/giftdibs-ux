import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  CardModule,
  GridModule,
  IconModule,
  MediaModule,
  ThumbnailModule
} from 'projects/ux/src/public_api';

import { CardDemoRoutingModule } from './card-demo-routing.module';
import { CardDemoComponent } from './card-demo.component';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    CardDemoRoutingModule,
    GridModule,
    IconModule,
    MediaModule,
    ThumbnailModule
  ],
  declarations: [
    CardDemoComponent
  ]
})
export class CardDemoModule { }
