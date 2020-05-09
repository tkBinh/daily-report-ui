import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const BASE_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

const PIPES = [];

const COMPONENTS = [
  // ValidatorsComponent,
];

const ENTRY_COMPONENTS = [];

const DIRECTIVES = [];

@NgModule({
  declarations: [
    ...PIPES, ...COMPONENTS, ...DIRECTIVES, ...ENTRY_COMPONENTS],
  imports: [
    ...BASE_MODULES
  ],
  exports: [
    ...BASE_MODULES, ...PIPES, ...COMPONENTS, ...DIRECTIVES, ...ENTRY_COMPONENTS
  ],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class ShareModule { }
