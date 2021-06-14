import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id): Task {
    return this.taskService.getTask(parseInt(id));
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

  @Put(':id')
  updateTask(
    @Body() task: CreateTaskDTO,
    @Param('id') id,
  ): {
    success: boolean;
    message: string;
  } {
    console.log('body: ', task);

    return {
      success: true,
      message: `Task id ${id} updated successfully`,
    };
  }
}
