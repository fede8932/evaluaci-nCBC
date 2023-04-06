import { IsEmail } from 'class-validator';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Employee } from 'src/employee/entities/employee.entity';

@Table({ tableName: 'supervisors', createdAt: false, updatedAt: false })
export class Supervisor extends Model {
  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @Column({ allowNull: false })
  @IsEmail()
  email: string;

  @Column({ allowNull: false })
  phone: string;

  @Column({ allowNull: false })
  birthdate: Date;

  @HasMany(() => Employee)
  employees: Employee[];
}
