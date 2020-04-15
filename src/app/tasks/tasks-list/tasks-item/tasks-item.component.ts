import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '@app/task';
import { TasksService } from '@app/tasks/tasks.service';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task;

  constructor(private service: TasksService) { }

  ngOnInit(): void {
  }

  deleteTask = (id: number) => this.service.deleteTask(id)

  taskToggle = (id: number) => this.service.toggleTaskStatus(id)

}