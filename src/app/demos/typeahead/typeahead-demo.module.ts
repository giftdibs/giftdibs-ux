import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FormFieldModule,
  IconModule,
  MediaModule,
  ThumbnailModule,
  TypeaheadModule
} from 'projects/ux/src/public_api';

import { TypeaheadDemoComponent } from './typeahead-demo.component';

import {
  TypeaheadDemoRoutingModule
} from './typeahead-demo-routing.module';

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
