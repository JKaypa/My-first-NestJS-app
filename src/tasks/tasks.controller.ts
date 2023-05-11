import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, dataToUpdateDto } from './dto/task.dto';

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

  @Put('?')
  updateTask(@Query('id') id: string, @Body() update: dataToUpdateDto) {
    return this.taskService.updateTask(id, update);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
