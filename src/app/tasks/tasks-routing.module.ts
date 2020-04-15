import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksNewComponent } from './tasks-new/tasks-new.component';


const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/new', component: TasksNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
