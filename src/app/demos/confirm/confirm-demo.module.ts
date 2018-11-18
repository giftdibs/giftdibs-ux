import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ConfirmModule
} from 'projects/ux/src/public_api';

import { ConfirmDemoRoutingModule } from './confirm-demo-routing.module';
import { ConfirmDemoComponent } from './confirm-demo.component';

@NgModule({
  declarations: [
    ConfirmDemoComponent
  ],
  imports: [
    CommonModule,
    ConfirmModule,
    ConfirmDemoRoutingModule
  ]
})
export class ConfirmDemoModule { }
