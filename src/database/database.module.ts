import { Module } from '@nestjs/common';
import * as mysql from 'mysql2/promise';
 @Module({
 providers: [
   {
     provide: 'DATABASE_CONNECTION',
     useFactory: async () => {
       const connection = await mysql.createConnection({
         host: '127.0.0.1',   // change to your DB host
         port: 3306,          // change to your DB port if different
         user: 'root',        // change to your DB user
         password: 'M1M2M3M4M4M3M2M1', // change to your DB password
         database: '', // change to your DB name
       });
       return connection;
     },
   },
 ],
 exports: ['DATABASE_CONNECTION'],
})
 export class DatabaseModule {}
