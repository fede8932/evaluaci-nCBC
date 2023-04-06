import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';
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
  async findAll(): Promise<Employee[] | Error> {
    try {
      return await this.employeeService.findAllEmployees();
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
