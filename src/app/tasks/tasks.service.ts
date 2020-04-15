import { Injectable } from '@angular/core';
import { of, Observable, ReplaySubject } from 'rxjs';
import { TASKS } from '@app/tasks-mock';
import { Task } from '@app/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  public tasksSubj: ReplaySubject<Task[]> = new ReplaySubject<Task[]>();
  tasks: Task[] = TASKS;

  constructor() { }

  getTasks() {
    this.tasksSubj.next(TASKS);
    return this.tasksSubj;
  }

  createTask(newTask: Task) {
    this.tasks.unshift(newTask);
    this.tasksSubj.next(this.tasks);
  }

  deleteTask(taskID) {
    this.tasks = this.tasks.filter(task => task.id !== taskID);
    this.tasksSubj.next(this.tasks);
  }

}
