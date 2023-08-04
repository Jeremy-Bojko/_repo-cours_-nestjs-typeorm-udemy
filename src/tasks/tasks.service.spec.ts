import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
});

describe('TasksService', () => {
  let tasksService: TasksService, taskRepository: { getTasks: any };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    taskRepository = module.get(TasksRepository);
  });

  it('should be defined', () => {
    expect(tasksService).toBeDefined();
  });

  describe('getTasks', () => {
    it('should call TasksRepository.getTasks and return the result', async () => {
      taskRepository.getTasks.mockResolvedValue('someValue');
      const result = await tasksService.getTasks(null, null);
      expect(result).toEqual('someValue');
    });
  });
});
