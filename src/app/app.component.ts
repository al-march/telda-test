import { Component, OnInit } from '@angular/core';
import { TASKS } from './tasks-mock'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo';

  localTasks = 'local-tasks'

  ngOnInit(): void {
    if (!localStorage.getItem(this.localTasks)) {
      localStorage.setItem(this.localTasks, JSON.stringify(TASKS))
    }
  }
}
