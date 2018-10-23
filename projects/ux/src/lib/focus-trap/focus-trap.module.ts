import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  WindowRefService
} from '../window/window-ref.service';

import {
  FocusTrapDirective
} from './focus-trap.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FocusTrapDirective
  ],
  declarations: [
    FocusTrapDirective
  ],
  providers: [
    WindowRefService
  ]
})
export class FocusTrapModule { }
