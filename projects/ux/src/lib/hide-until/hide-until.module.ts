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
  HideUntilDirective
} from './hide-until.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HideUntilDirective
  ],
  declarations: [
    HideUntilDirective
  ],
  providers: [
    WindowRefService
  ]
})
export class HideUntilModule { }
