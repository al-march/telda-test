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
    this.tasksSubj.next(this.tasks);
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

  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id)
  }

  toggleTaskStatus(id) {
    const targetTask = this.tasks.findIndex(task => task.id === id);
    this.tasks[targetTask].done = !this.tasks[targetTask].done;
    this.tasksSubj.next(this.tasks);
  }

}
