import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '@app/task';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.scss']
})
export class TasksEditComponent implements OnInit {

  editedTask: Task;
  form: FormGroup;
  taskID: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TasksService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(route => {
      this.taskID = Number.parseInt(route.get('id'));

      this.editedTask = this.service.getTaskById(this.taskID);

      this.form = this.formBuilder.group({
        title: [this.editedTask.title, Validators.required],
        description: [this.editedTask.description, Validators.required]
      })
    })
  }

  acceptEdit() {
    try {
      this.service.editTask(this.taskID, this.form.value);
      this.router.navigate(['tasks']);
    } catch (error) {
      this.router.navigate(['tasks']);
    }
  }

}
