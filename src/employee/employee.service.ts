import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
// import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee)
    private employee: typeof Employee,
  ) {}
  async create(
    createEmployeeDto: CreateEmployeeDto | any,
  ): Promise<void | Error> {
    try {
      await this.employee.create(createEmployeeDto);
    } catch (e) {
      throw e;
    }
  }

  // findAll() {
  //   return `This action returns all employee`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} employee`;
  // }

  // update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
  //   return `This action updates a #${id} employee`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} employee`;
  // }
}
