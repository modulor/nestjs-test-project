import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): { hello: string } {
    return { hello: 'world' };
  }

  @Post()
  createTask(@Body() task: CreateTaskDTO): {
    success: boolean;
    message: string;
  } {
    console.log(task);
    return {
      success: true,
      message: 'Everything OK!',
    };
  }
}
