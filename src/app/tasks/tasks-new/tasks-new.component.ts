import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '@app/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-new',
  templateUrl: './tasks-new.component.html',
  styleUrls: ['./tasks-new.component.scss']
})
export class TasksNewComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: TasksService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  createTask() {
    const newTask: Task = { id: Date.now(), done: false, ...this.form.value};
    this.service.createTask(newTask);
  }

}
