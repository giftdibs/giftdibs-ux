import {
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { ButtonsDemoComponent } from './buttons-demo.component';
import { ThemeDemoRoutingModule } from './theme-demo-routing.module';

@NgModule({
  declarations: [
    ButtonsDemoComponent
  ],
  exports: [
    ButtonsDemoComponent
  ],
  imports: [
    CommonModule,
    ThemeDemoRoutingModule
  ]
})
export class ThemeDemoModule { }
