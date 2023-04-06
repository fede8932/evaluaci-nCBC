import { Module } from '@nestjs/common';
import { SupervisorService } from './supervisor.service';
import { SupervisorController } from './supervisor.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([SupervisorController])],
  controllers: [SupervisorController],
  providers: [SupervisorService],
})
export class SupervisorModule {}
