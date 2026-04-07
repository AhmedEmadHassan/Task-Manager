import { Injectable } from '@angular/core';
export interface Task
{
  id:number;
  title:string;
  description:string;
  IsCompleted:boolean;
  createdAt:Date;
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public tasks = [
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
  ];
}
