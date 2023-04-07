import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './employee/entities/employee.entity';
import { dbConfig } from './config/database';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: dbConfig.host,
      port: dbConfig.dbPort,
      database: dbConfig.db,
      username: dbConfig.user,
      password: dbConfig.pass,
      autoLoadModels: true,
      models: [Employee],
    }),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
