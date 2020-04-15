import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { TASKS } from '@app/tasks-mock';
import { Task } from '@app/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private localTasks: string = 'local-tasks';

  public tasksSubj: ReplaySubject<Task[]> = new ReplaySubject<Task[]>();
  tasks: Task[] = JSON.parse(localStorage.getItem(this.localTasks));

  constructor() { }

  getTasks() {
    this.saveState()
    return this.tasksSubj;
  }

  createTask(newTask: Task) {
    this.tasks.unshift(newTask);
    this.saveState()
  }

  deleteTask(taskID: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskID);
    this.saveState()
  }

  getTaskById = (id: number): Task => this.tasks.find(task => task.id === id);


  editTask(id, editorFields) {
    const editedIndex = this.tasks.findIndex(task => task.id === id);
    this.tasks[editedIndex].title = editorFields.title;
    this.tasks[editedIndex].description = editorFields.description;
    this.saveState()
  }

  toggleTaskStatus(id) {
    const targetTask = this.tasks.findIndex(task => task.id === id);
    this.tasks[targetTask].done = !this.tasks[targetTask].done;
    this.saveState()
  }

  saveState() {
    this.tasksSubj.next(this.tasks);
    localStorage.setItem(this.localTasks, JSON.stringify(this.tasks))
  }

}
