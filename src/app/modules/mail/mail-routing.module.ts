import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MailComponent} from './mail.component';
import {ListComponent} from './list/list.component';


const routes: Routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      {
        path: '',
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
