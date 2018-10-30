import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  OverlayModule
} from '../overlay/overlay.module';

import {
  PopoverDirective
} from './popover.directive';

import {
  PopoverComponent
} from './popover.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [
    PopoverComponent,
    PopoverDirective
  ],
  exports: [
    PopoverDirective
  ],
  entryComponents: [
    PopoverComponent
  ]
})
export class PopoverModule { }
