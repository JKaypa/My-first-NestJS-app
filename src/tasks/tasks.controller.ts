import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
	helloworld(){
		return 'This is my first API with Nestjs!'
	}
}
