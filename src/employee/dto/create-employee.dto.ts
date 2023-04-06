export class CreateEmployeeDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  leader: boolean;
  birthdate?: Date;
}
