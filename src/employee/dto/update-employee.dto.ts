import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  id: number;
  @ApiProperty({
    description: 'Primer nombre',
    example: 'Mariana',
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    description: 'Apellido',
    example: 'Fernandez',
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    description: 'Correo electrónico',
    example: 'm.fernandez@cbc.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'Teléfono',
    example: '54 1123568974',
    required: false,
  })
  phone?: string;

  @ApiProperty({
    description: 'Indicar si es lider',
    example: true,
    required: false,
  })
  leader?: boolean;

  @ApiProperty({
    description: 'Fecha de nacimiento',
    example: '08-31-1989',
    required: false,
  })
  birthdate?: Date;

  @ApiProperty({
    description: 'El ID de un supervisor que exista en la base de datos',
    example: '1',
    required: false,
  })
  supervisorId?: number;
}
