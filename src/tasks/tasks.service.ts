import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  // Create a new task
  async createTask(taskName: string, description: string): Promise<Task> {
    const newTask = this.taskRepository.create({ taskName, description});
    return this.taskRepository.save(newTask);
  }

  // Get all tasks 
  async getTasks(): Promise<Task[]> {
    try {
      const tasks = await this.taskRepository.find();
      return tasks;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error('Failed to retrieve tasks.');
    }
  }

  // Get a task by id
  async getTaskById(taskId: number): Promise<Task> {
    try {
      return await this.taskRepository.findOne({ where: { taskId } });
    } catch (error) {
      console.error('Error fetching task by ID:', error);
      throw new Error('Task not found.');
    }
  }
  
  //get task by status
  async getTasksByStatus(status: string): Promise<Task[]> {
    const tasks = await this.taskRepository.find({ where: { status } });
    
    if (!tasks || tasks.length === 0) {
      throw new NotFoundException(`No tasks with status "${status}" were found.`);
    }

    return tasks;
  }

  // Update a task's status
  async updateTaskStatus(taskId: number, status: string): Promise<Task> {
    // try {
    //   return await this.taskRepository.update ({ where : {taskId}}) // 2 parametres required
    // }
    // catch(error)
    // {
    //   console.error("Task not updated",error);
    //   throw new Error("task not updated")
    // }
    const task = await this.getTaskById(taskId);
    task.status = status;
    return this.taskRepository.save(task);
  }

  // Delete a task by id
  async deleteTask(taskId: number): Promise<void> {
    await this.taskRepository.delete({ taskId });
  }
}
