import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DropdownMenuModule } from 'projects/ux/src/public_api';

import { DropdownMenuDemoRoutingModule } from './dropdown-menu-demo-routing.module';
import { DropdownMenuDemoComponent } from './dropdown-menu-demo.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownMenuModule,
    DropdownMenuDemoRoutingModule
  ],
  declarations: [DropdownMenuDemoComponent]
})
export class DropdownMenuDemoModule { }
