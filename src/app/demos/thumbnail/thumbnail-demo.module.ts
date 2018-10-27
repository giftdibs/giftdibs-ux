import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThumbnailDemoRoutingModule } from './thumbnail-demo-routing.module';
import { ThumbnailDemoComponent } from './thumbnail-demo.component';
import { ThumbnailModule } from 'projects/ux/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    ThumbnailModule,
    ThumbnailDemoRoutingModule
  ],
  declarations: [
    ThumbnailDemoComponent
  ]
})
export class ThumbnailDemoModule { }
