import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'task #1',
      description: 'This is mi first task to do',
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getTasks() {
    return this.tasks;
  }

  createTask(task: CreateTaskDto) {
    const newtask: Task = {
      id: Number(new Date()),
      title: task.title,
      description: task.description,
      status: TaskStatus.PENDING,
    };

    this.tasks.push(newtask);
    return newtask;
  }

  updateTask() {}

  deleteTask() {}
}
