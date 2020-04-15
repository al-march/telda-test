import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '@app/task';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.scss']
})
export class TasksEditComponent implements OnInit {

  editedTask: Task;

  constructor(
    private route: ActivatedRoute, 
    private service: TasksService
    ) { }

  ngOnInit(): void {
    const taskID = Number.parseInt(this.route.snapshot.params.id);
    this.editedTask = this.service.getTaskById(taskID);
    console.log(this.editedTask);
    
  }

}
