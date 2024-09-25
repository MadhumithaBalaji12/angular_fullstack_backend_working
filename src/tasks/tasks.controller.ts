import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @Get()
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

    // Fetch tasks by status
    @Get('status/:status')
    async getTasksByStatus(@Param('status') status: string): Promise<Task[]> {
      return this.tasksService.getTasksByStatus(status);
    }

  @Get(':id')
  async getTaskById(@Param('id') taskId: number): Promise<Task> {
    return this.tasksService.getTaskById(taskId);
  }

  @Post()
  async createTask(
    @Body() taskData:{taskName: string, description: string}): Promise<Task> {
    return this.tasksService.createTask(taskData.taskName, taskData.description);
  }

  @Patch(':id/status')
  async updateTaskStatus(
    @Param('id') taskId: number,
    @Body('status') status: string,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(taskId, status);
  }


  @Delete(':id')
  async deleteTask(
    @Param('id') taskId: number): Promise<void> {
    return this.tasksService.deleteTask(taskId);
  }

}
