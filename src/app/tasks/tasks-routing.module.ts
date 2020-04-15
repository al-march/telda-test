import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksNewComponent } from './tasks-new/tasks-new.component';
import { TasksEditComponent } from './tasks-edit/tasks-edit.component';


const routes: Routes = [
  { path: 'tasks', component: TasksComponent, children: [
    { path: 'new', component: TasksNewComponent },
    { path: 'edit/:id', component: TasksEditComponent },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
