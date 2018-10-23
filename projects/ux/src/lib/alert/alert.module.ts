import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {
  IconModule
} from '../icon/icon.module';

import {
  OverlayModule
} from '../overlay/overlay.module';

import {
  AlertComponent
} from './alert.component';

import {
  AlertService
} from './alert.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    IconModule,
    OverlayModule
  ],
  declarations: [
    AlertComponent
  ],
  providers: [
    AlertService
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class AlertModule { }
