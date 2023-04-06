import { IsEmail } from 'class-validator';
import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

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

  @Column
  leader: boolean;

  @ForeignKey(() => Employee)
  @Column
  supervisorId: number;

  @BelongsTo(() => Employee, 'supervisorId')
  supervisor: Employee;

  @HasMany(() => Employee, 'supervisorId')
  subordinados: Employee[];
}
