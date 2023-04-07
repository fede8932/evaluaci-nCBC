import { CreateEmployeeDto } from './create-employee.dto';

export class ReturnSupervisorDto extends CreateEmployeeDto {
  subordinados: CreateEmployeeDto[];
}
