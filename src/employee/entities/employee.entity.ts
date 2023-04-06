import { IsEmail } from 'class-validator';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Supervisor } from 'src/supervisor/entities/supervisor.entity';

@Table({ tableName: 'employees', createdAt: false, updatedAt: false })
export class Employee extends Model {
  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column({ allowNull: false })
  @IsEmail()
  email: string;

  @Column({ allowNull: false })
  phone: string;

  @Column
  birthdate: Date;

  @ForeignKey(() => Supervisor)
  @Column
  supervisorId: number;

  @BelongsTo(() => Supervisor)
  supervisor: Supervisor;
}
