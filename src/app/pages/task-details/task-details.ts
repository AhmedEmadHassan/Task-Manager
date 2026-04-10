import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Task, TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-details',
  imports: [RouterLink],
  templateUrl: './task-details.html',
  styleUrl: './task-details.scss',
})
export class TaskDetails {
  route = inject(ActivatedRoute);
  router = inject(Router);
  taskId = signal<number|null>(null);
  taskService = inject(TaskService);
  task = computed(()=>
  {
    const id = this.taskId();
    if(!id) return undefined;
    return this.taskService.getTask(id);
  }); 
  status = computed(()=>{
    const currentTask = this.task();
    if(currentTask == undefined) return undefined;
    return currentTask.IsCompleted?'Completed':'Not Completed';
  });
  constructor(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
    {
      this.taskId.set(Number(id));
    }
  }
deleteTask()
{
  const id = this.taskId();
  if(id)
    {
      this.taskService.DeleteTask(id);
      this.router.navigate(['/']);
    }
  }
}
