import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { MaterializeModule } from 'src/app/modules/materialize/materialize.module';
import { QueueManagementRoutingModule } from './queue-management-routing.module';
import { AddQueueComponent } from './add-queue/add-queue.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';
import { EditQueueComponent } from './edit-queue/edit-queue.component';
import { DeleteQueueComponent } from './delete-queue/delete-queue.component';
import { QueueManagementComponent } from './queue-management/queue-management.component';
import { FilterRuleDialogComponent } from './filter-rule-dialog/filter-rule-dialog.component';

@NgModule({
  declarations: [
    AddQueueComponent,
    ViewQueueComponent,
    EditQueueComponent,
    DeleteQueueComponent,
    QueueManagementComponent,
    FilterRuleDialogComponent,
  ],
  imports: [CommonModule, QueueManagementRoutingModule, MaterializeModule],
  entryComponents: [FilterRuleDialogComponent],
})
export class QueueManagementModule {}
