import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
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
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteTask(id: string): string {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  //   return `Task with id ${id} deleted successfully`;
  // }
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
