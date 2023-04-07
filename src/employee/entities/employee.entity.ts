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
  @Column({ allowNull: false, validate: { notEmpty: true } })
  firstName: string;

  @Column({ allowNull: false, validate: { notEmpty: true } })
  lastName: string;

  @Column({
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @Column({ allowNull: false, validate: { notEmpty: true } })
  phone: string;

  @Column({
    validate: {
      isDate: true,
    },
  })
  birthdate: Date;

  @Column({ defaultValue: false })
  leader: boolean;

  @ForeignKey(() => Employee)
  @Column({
    validate: {
      isInt: true,
    },
  })
  supervisorId: number;

  @BelongsTo(() => Employee, 'supervisorId')
  supervisor: Employee;

  @HasMany(() => Employee, 'supervisorId')
  subordinados: Employee[];
}
