import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ShareModule} from '../@share/share.module';
import {MainLayoutComponent} from './layouts';
import {HeaderComponent} from './components/header/header.component';
import {LoadingComponent} from './components/loading/loading.component';

const PIPES = [];

const THEME_MODULES = [];

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  ShareModule
];

const COMPONENTS = [
  HeaderComponent,
  MainLayoutComponent,
  LoadingComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS, ...PIPES
  ],
  imports: [
    ...BASE_MODULES, ...THEME_MODULES
  ],
  exports: [
    ...BASE_MODULES, ...THEME_MODULES, ...COMPONENTS, ...PIPES
  ]
})

// TODO: Đây là cái gì nhỉ ?
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: []
    };
  }
}
