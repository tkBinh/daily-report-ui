import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/top/top.module').then(o => o.TopModule) },
  { path: 'project', loadChildren: () => import('./modules/project/project.module').then(o => o.ProjectModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(o => o.UserModule) },
  { path: 'mail', loadChildren: () => import('./modules/mail/mail.module').then(o => o.MailModule) },
  { path: 'task', loadChildren: () => import('./modules/task/task.module').then(o => o.TaskModule) },
  { path: 'error', loadChildren: () => import('./modules/error/error.module').then(o => o.ErrorModule) },
  { path: '**', redirectTo: '/error/page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
