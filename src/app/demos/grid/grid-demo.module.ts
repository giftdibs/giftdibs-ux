import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { GridModule } from '../../../../projects/ux/src/public_api';

import { GridDemoRoutingModule } from './grid-demo-routing.module';
import { GridDemoComponent } from './grid-demo.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    GridDemoRoutingModule
  ],
  declarations: [
    GridDemoComponent
  ]
})
export class GridDemoModule { }
