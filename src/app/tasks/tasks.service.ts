import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { TASKS } from '@app/tasks-mock';
import { Task } from '@app/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = TASKS;

  constructor() { }

  getTasks() {
    return of(this.tasks)
  }
  
  createTask(newTask) {
    
  }
  deleteTask(taskID): Observable<any> {
    this.tasks = this.tasks.filter(task => task.id !== taskID);
    return of(this.tasks);
  }

}
