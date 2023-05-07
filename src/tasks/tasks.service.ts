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

  deleteTask(id: string) {
    // const taskToBeDeleted: Task = this.tasks.find((task) => task.id);
    const idNum = Number(id)
    this.tasks = this.tasks.filter((task) => task.id !== idNum);
    console.log(this.tasks);
    
    return `The task has been deleted succesfully`;
  }
}
