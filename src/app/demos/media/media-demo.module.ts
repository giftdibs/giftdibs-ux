import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaDemoRoutingModule } from './media-demo-routing.module';
import { MediaDemoComponent } from './media-demo.component';
import { MediaModule, ThumbnailModule } from 'projects/ux/src/public_api';

@NgModule({
  imports: [
    CommonModule,
    MediaDemoRoutingModule,
    MediaModule,
    ThumbnailModule
  ],
  declarations: [
    MediaDemoComponent
  ]
})
export class MediaDemoModule { }
