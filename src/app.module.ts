import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'cbc',
      autoLoadModels: true,
      models: [Employee],
    }),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
