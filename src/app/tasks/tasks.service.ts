import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TASKS } from '@app/tasks-mock';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks() {
    return of(TASKS)
  }
  
  createTask(newTask) {
    
  }
  deleteTask(taskId) {

  }

}
