import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  taskId: number;

  @Column()
  taskName: string;

  @Column()
  description: string;

  @Column({ default: 'pending' })
  status: string;
}
