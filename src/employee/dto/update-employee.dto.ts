import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  leader?: boolean;
  birthdate?: Date;
  supervisorId?: number;
}
