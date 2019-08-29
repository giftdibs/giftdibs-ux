import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  TabsModule,
  GridModule,
  IconModule,
  MediaModule,
  RibbonModule,
  ThumbnailModule
} from 'projects/ux/src/public_api';

import { TabsDemoRoutingModule } from './tabs-demo-routing.module';
import { TabsDemoComponent } from './tabs-demo.component';

@NgModule({
  imports: [
    TabsModule,
    CommonModule,
    TabsDemoRoutingModule,
    GridModule,
    IconModule,
    MediaModule,
    RibbonModule,
    ThumbnailModule
  ],
  declarations: [
    TabsDemoComponent
  ]
})
export class TabsDemoModule { }
