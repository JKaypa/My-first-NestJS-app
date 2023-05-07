import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';
import { log } from 'console';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  
  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    console.log(newTask);
    
    return this.taskService.createTask(newTask);

  }
}
