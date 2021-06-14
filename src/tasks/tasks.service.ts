import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'a title',
      description: 'this is a description for task a title',
      done: true,
    },
    {
      id: 2,
      title: 'task two',
      description: 'this is a description for task task two',
      done: false,
    },
    {
      id: 3,
      title: 'task three',
      description: 'this is a description for task task three',
      done: true,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
