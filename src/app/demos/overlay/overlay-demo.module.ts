import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { OverlayModule } from 'projects/ux/src/public_api';

import { OverlayDemoRoutingModule } from './overlay-demo-routing.module';
import { OverlayDemoSubjectComponent } from './overlay-demo-subject.component';
import { OverlayDemoComponent } from './overlay-demo.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    OverlayDemoRoutingModule
  ],
  declarations: [
    OverlayDemoComponent,
    OverlayDemoSubjectComponent
  ],
  entryComponents: [
    OverlayDemoSubjectComponent
  ]
})
export class OverlayDemoModule { }
