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
import { OverlayComponent } from './overlay.component';
import { OverlayService } from './overlay.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    OverlayComponent
  ],
  entryComponents: [
    OverlayComponent
  ],
  providers: [
    OverlayDomAdapterService,
    OverlayService,
    WindowRefService
  ]
})
export class OverlayModule { }
