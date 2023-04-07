import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'Primer nombre',
    example: 'Gabriel',
  })
  firstName: string;

  @ApiProperty({
    description: 'Apellido',
    example: 'Rodriguez',
  })
  lastName: string;

  @ApiProperty({
    description: 'Correo electrónico',
    example: 'g.rodriguez@cbc.com',
  })
  email: string;

  @ApiProperty({
    description: 'Telefono de contacto',
    example: '+54 1122558877',
  })
  phone: string;

  @ApiProperty({
    description:
      'Seleccionar true si el empleado es Supervisor, false si no lo es',
    example: false,
  })
  leader: boolean;

  @ApiProperty({
    description: 'Fecha opcional',
    example: '10-12-2023',
    required: false,
  })
  birthdate?: Date;
}
