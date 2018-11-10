import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
import { DisclosureComponent } from './disclosure.component';
import { DisclosureHeadingComponent } from './disclosure-heading.component';
import { DisclosureBodyComponent } from './disclosure-body.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    DisclosureComponent,
    DisclosureHeadingComponent,
    DisclosureBodyComponent
  ],
  exports: [
    DisclosureComponent,
    DisclosureHeadingComponent,
    DisclosureBodyComponent
  ]
})
export class DisclosureModule { }
