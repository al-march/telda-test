import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '@app/task';
import { TasksService } from '@app/tasks/tasks.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteTask = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    
  }

}
