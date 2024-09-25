import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "src/tasks/task.entity";

export const SQLConnection: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',         
  password: 'M1M2M3M4M4M3M2M1',     
  database: 'todo', 
  synchronize: true,
  entities : [Task],       
  logging: true,   
}
