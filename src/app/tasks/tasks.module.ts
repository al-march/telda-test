import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksNewComponent } from './tasks-new/tasks-new.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksItemComponent } from './tasks-list/tasks-item/tasks-item.component';


@NgModule({
  declarations: [TasksComponent, TasksNewComponent, TasksListComponent, TasksItemComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
