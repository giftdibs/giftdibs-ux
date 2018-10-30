import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PopoverModule } from 'projects/ux/src/public_api';

import { PopoverDemoRoutingModule } from './popover-demo-routing.module';
import { PopoverDemoComponent } from './popover-demo.component';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule,
    PopoverDemoRoutingModule
  ],
  declarations: [
    PopoverDemoComponent
  ]
})
export class PopoverDemoModule { }
