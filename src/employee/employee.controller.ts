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
// import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('/')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('employee')
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
  async remove(@Param('id') id: string): Promise<string | Error> {
    try {
      return await this.employeeService.deleteEmployee(+id);
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }

  @Get('employee')
  async findAll(): Promise<CreateEmployeeDto[] | Error> {
    try {
      return await this.employeeService.findAllEmployees();
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }

  @Put('employee/:id')
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
  async findAllSupervisors(): Promise<CreateEmployeeDto[] | Error> {
    try {
      return await this.employeeService.findAllSupervisors();
    } catch (e) {
      console.log(e);
      throw e.message;
    }
  }

  @Get('supervisor/:id')
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

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeeService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
  //   return this.employeeService.update(+id, updateEmployeeDto);
  // }
}
