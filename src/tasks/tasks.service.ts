import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto, dataToUpdateDto } from './dto/task.dto';

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

  updateTask(id: string, dataToUpdate: dataToUpdateDto) {
    const taskFound: Task = this.tasks.find((task) => task.id === +id);
    if (!taskFound) return 'That task was not found';
    const dataUpdated: Task = Object.assign(taskFound, dataToUpdate);
    this.tasks = this.tasks.map((task) =>
      task.id === +id ? dataUpdated : task,
    );
    return dataUpdated;
  }

  deleteTask(id: string) {
    const idNum = Number(id);
    this.tasks = this.tasks.filter((task) => task.id !== idNum);
    console.log(this.tasks);

    return `The task has been deleted succesfully`;
  }
}
