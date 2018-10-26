import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { TypeaheadResultsComponent } from './typeahead-results.component';
import { TypeaheadComponent } from './typeahead.component';
import { OverlayModule } from '../overlay/overlay.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  exports: [
    TypeaheadComponent
  ],
  declarations: [
    TypeaheadComponent,
    TypeaheadResultsComponent
  ],
  entryComponents: [
    TypeaheadResultsComponent
  ]
})
export class TypeaheadModule { }
