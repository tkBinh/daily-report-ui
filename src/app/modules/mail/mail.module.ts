import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [MailComponent, ListComponent],
  imports: [
    CommonModule,
    MailRoutingModule
  ]
})
export class MailModule { }
