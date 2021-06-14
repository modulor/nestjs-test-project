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
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDTO): Promise<Task> {
    return this.taskService.createTask(task);
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
