import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  
  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {    
    return this.taskService.createTask(newTask);
  }

  @Delete(':id')
  deleteTask(@Param ('id') id: string) {
    return this.taskService.deleteTask(id)
  }
}
