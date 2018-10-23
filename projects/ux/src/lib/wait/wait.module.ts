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
  WaitComponent
} from './wait.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    WaitComponent
  ],
  exports: [
    WaitComponent
  ]
})
export class WaitModule { }
