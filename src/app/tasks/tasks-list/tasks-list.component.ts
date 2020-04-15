import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '@app/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  public tasks: Task[];

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  deleteTask(id) {
    this.service.deleteTask(id);
  }

  isNoTasks = () => this.tasks.length === 0;

}
