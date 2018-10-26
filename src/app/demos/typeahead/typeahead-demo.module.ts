import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FormFieldModule,
  TypeaheadModule,
  ThumbnailModule,
  MediaModule,
  IconModule
} from 'projects/ux/src/public_api';

import { TypeaheadDemoComponent } from './typeahead-demo.component';
import {
  TypeaheadDemoRoutingModule
} from './typeahead-demo-routing.module';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TypeaheadDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldModule,
    IconModule,
    MediaModule,
    ThumbnailModule,
    TypeaheadDemoRoutingModule,
    TypeaheadModule
  ]
})
export class TypeaheadDemoModule { }
