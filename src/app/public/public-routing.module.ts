import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'admin-management',
        loadChildren: () => import('./admin-management/admin-management.module').then(m => m.AdminManagementModule)
      },
      {
        path: 'queue-management',
        loadChildren: () => import('./queue-management/queue-management.module').then(m => m.QueueManagementModule)
      },
      {
        path: 'filter-management',
        loadChildren: () => import('./filter-management/filter-management.module').then(m => m.FilterManagementModule)
      },
      {
        path: 'report-management',
        loadChildren: () => import('./report-management/report-management.module').then(m => m.ReportManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
