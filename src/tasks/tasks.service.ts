import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private taskRepository: TasksRepository,
  ) {}
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with the id ${id} not found`);
    }

    return found;
  }
  // getTaskById(id: string): Task {
  //   // try to get task
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     // if not found, throw an error (404 not found)
  //     throw new NotFoundException(`Task with the id ${id} not found`);
  //   }
  //   // otherwise, return the found task
  //   return found;
  // }
  // getFilteredTasks(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.description.includes(search) || task.title.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  /**
   * this solution is better as
   * only one API call is made
   * (compare to remove() method)
   */
  async deleteTask(id: string): Promise<string> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return `Task with id ${id} deleted successfully`;
  }

  async removeTask(id: string): Promise<Task> {
    const found = await this.getTaskById(id);

    const removedTask = await this.taskRepository.remove(found);

    return removedTask;
  }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   // let taskIndex = -1;
  //   // const taskToUpdate: Task = this.tasks.find((task, index) => {
  //   //   if (task.id === id) {
  //   //     taskIndex = index;
  //   //     return task;
  //   //   }
  //   // });
  //   // const updatedTask: Task = {
  //   //   ...taskToUpdate,
  //   //   status,
  //   // };
  //   // this.tasks.splice(taskIndex, 1, updatedTask);
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
