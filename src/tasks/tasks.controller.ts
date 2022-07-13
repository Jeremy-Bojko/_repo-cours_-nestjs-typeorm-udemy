import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  /**
   * Version 1
   */
  // @Post()
  // createTask(@Body() body) {
  //   console.log(body);
  // }

  /**
   * Version 2
   */
  // @Post()
  // createTask(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Task {
  //   return this.tasksService.createTask(title, description);
  // }

  /**
   * Version 3
   */
  // @Post()
  // createTask(
  //   @Body() { title, description }: { title: string; description: string },
  // ): Task {
  //   return this.tasksService.createTask(title, description);
  // }

  /**
   * Version 4
   */
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
