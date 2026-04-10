import { Component, Inject, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  public taskService = inject(TaskService);
}
