import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQueueComponent } from './add-queue/add-queue.component';
import { DeleteQueueComponent } from './delete-queue/delete-queue.component';
import { EditQueueComponent } from './edit-queue/edit-queue.component';
import { QueueManagementComponent } from './queue-management/queue-management.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';

const routes: Routes = [
  {
    path: '',
    component: QueueManagementComponent,
    children: [
      { path: 'add-queue', component: AddQueueComponent },
      { path: 'edit-queue', component: EditQueueComponent },
      { path: 'view-queue', component: ViewQueueComponent },
      { path: 'delete-queue', component: DeleteQueueComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueManagementRoutingModule { }
