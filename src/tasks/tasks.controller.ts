import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';

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

  @Delete(':id')
  deleteTask(@Param('id') id): {
    success: boolean;
    message: string;
  } {
    return {
      success: true,
      message: `Task id ${id} deleted successfully`,
    };
  }
}
