import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [UserComponent, ListComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
