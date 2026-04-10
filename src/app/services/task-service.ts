import { Injectable, signal } from '@angular/core';
export interface Task
{
  Id:number;
  title:string;
  description:string;
  IsCompleted:boolean;
  CreatedAt:Date;
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSignal = signal<Task[]>( [
    {
      Id: 1,
      title: 'Learn Angular Basics',
      description: 'Understand Components, Services and Routing',
      IsCompleted: true,
      CreatedAt: new Date('2026-2-9')
    },
    {
      Id: 2,
      title: 'Build a Project',
      description: 'Create a Task Manager Application',
      IsCompleted: false,
      CreatedAt: new Date('2026-3-15')
    }
  ]);
  public tasks = this.tasksSignal.asReadonly();
  getTask(id: number)
  {
    return this.tasks().find(task => task.Id == id);
  }
  addTask(title: string, description: string) {
    const task: Task = {
      Id: this.tasks.length + 1,
      title,
      description,
      IsCompleted: false,
      CreatedAt: new Date(),
    };

    this.tasksSignal.update((tasks) => [...tasks, task]);
  }
  DeleteTask(id: number)
  {
    this.tasksSignal.update(tasks=>tasks.filter(task=>task.Id != id));
  }
}
