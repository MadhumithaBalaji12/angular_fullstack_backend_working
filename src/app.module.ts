import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import {SQLConnection} from './database/db.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(SQLConnection),
    TasksModule,
  ],
})
export class AppModule {}
