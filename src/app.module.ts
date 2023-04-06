import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';
import { Supervisor } from './supervisor/entities/supervisor.entity';
// import { SupervisorModule } from './supervisor/supervisor.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'cbc',
      autoLoadModels: true,
      models: [Employee, Supervisor],
    }),
    EmployeeModule,
    // SupervisorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
