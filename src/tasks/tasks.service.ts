import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  getFilteredTasks(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.description.includes(search) || task.title.includes(search)) {
          return true;
        }
        return false;
      });
    }

    return tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): string {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return `Task with id ${id} deleted successfully`;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    // let taskIndex = -1;
    // const taskToUpdate: Task = this.tasks.find((task, index) => {
    //   if (task.id === id) {
    //     taskIndex = index;
    //     return task;
    //   }
    // });
    // const updatedTask: Task = {
    //   ...taskToUpdate,
    //   status,
    // };

    // this.tasks.splice(taskIndex, 1, updatedTask);
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
