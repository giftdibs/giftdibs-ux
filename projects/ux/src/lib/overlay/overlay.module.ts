import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  WindowRefService
} from '../window/window-ref.service';

import { OverlayDomAdapterService } from './overlay-dom-adapter.service';
import { OverlayHostComponent } from './overlay-host.component';
import { OverlayComponent } from './overlay.component';
import { OverlayService } from './overlay.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    OverlayComponent,
    OverlayHostComponent
  ],
  providers: [
    OverlayDomAdapterService,
    OverlayService,
    WindowRefService
  ]
})
export class OverlayModule { }
