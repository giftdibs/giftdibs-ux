import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

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
    CommonModule,
    IconModule,
    OverlayModule
  ],
  declarations: [
    AlertComponent
  ],
  providers: [
    AlertService
  ]
})
export class AlertModule { }
