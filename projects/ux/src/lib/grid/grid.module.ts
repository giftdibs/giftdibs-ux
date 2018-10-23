import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { ColumnComponent } from './column.component';
import { RowComponent } from './row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RowComponent,
    ColumnComponent
  ],
  exports: [
    RowComponent,
    ColumnComponent
  ]
})
export class GridModule { }
