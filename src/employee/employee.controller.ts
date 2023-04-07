import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
  // Param,
  // Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

@Controller('/')
@ApiTags('Empleados')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('employee')
  @ApiOperation({ summary: 'Crear un empleado' })
  @ApiBody({
    type: CreateEmployeeDto,
    description: 'Algunos datos son opcionales',
  })
  @ApiCreatedResponse({ description: 'Creado' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.' })
  async create(
    @Body() dataEmployee: CreateEmployeeDto,
  ): Promise<string | Error> {
    try {
      return await this.employeeService.create(dataEmployee);
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }

  @Delete('employee/:id')
  @ApiOperation({ summary: 'Eliminar un empleado' })
  async remove(@Param('id') id: string): Promise<string | Error> {
    try {
      return await this.employeeService.deleteEmployee(+id);
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }

  @Get('employee')
  @ApiOperation({ summary: 'Listar todos los empleados' })
  async findAll(): Promise<CreateEmployeeDto[] | Error> {
    try {
      return await this.employeeService.findAllEmployees();
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }

  @Put('employee/:id')
  @ApiOperation({
    summary: 'Modificar datos de un empleado o asignar un supervisor',
  })
  async update(
    @Param('id') id: string,
    @Body() dataEmployee: UpdateEmployeeDto,
  ): Promise<string | Error> {
    try {
      dataEmployee.id = +id;
      return await this.employeeService.updateEmployee(dataEmployee);
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }

  @Get('supervisor')
  @ApiOperation({
    summary: 'Listar todos los supervisores',
  })
  async findAllSupervisors(): Promise<CreateEmployeeDto[] | Error> {
    try {
      return await this.employeeService.findAllSupervisors();
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }

  @Get('supervisor/:id')
  @ApiOperation({
    summary: 'Buscar supervisor por id y ver a todos los subordinados',
  })
  async findSupervisor(
    @Param('id') id: string,
  ): Promise<CreateEmployeeDto | Error> {
    try {
      return await this.employeeService.findSupervisor(+id);
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }
}
