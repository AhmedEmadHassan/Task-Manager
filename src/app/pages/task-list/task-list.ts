import { Component, Inject, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  public taskService = inject(TaskService);
}
