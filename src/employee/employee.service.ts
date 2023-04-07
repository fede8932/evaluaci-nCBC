import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { ReturnSupervisorDto } from './dto/return-supervisor.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee)
    private employee: typeof Employee,
  ) {}
  async create(
    createEmployeeDto: CreateEmployeeDto | any,
  ): Promise<string | Error> {
    try {
      await this.employee.create(createEmployeeDto);
      return 'Creado';
    } catch (e) {
      throw e;
    }
  }

  async findAllEmployees(): Promise<CreateEmployeeDto[] | Error> {
    try {
      return await this.employee.findAll({
        attributes: ['firstName', 'lastName', 'email', 'leader', 'birthdate'],
      });
    } catch (e) {
      throw e;
    }
  }

  async findAllSupervisors(): Promise<CreateEmployeeDto[] | Error> {
    try {
      return await this.employee.findAll({
        where: { leader: true },
        attributes: ['firstName', 'lastName', 'email', 'leader', 'birthdate'],
      });
    } catch (e) {
      throw e;
    }
  }

  async findSupervisor(id): Promise<ReturnSupervisorDto | Error> {
    try {
      return await this.employee.findOne({
        where: { id },
        attributes: ['firstName', 'lastName', 'email', 'leader', 'birthdate'],
        include: [
          {
            model: Employee,
            as: 'subordinados',
            attributes: ['firstName', 'lastName', 'email', 'birthdate'],
          },
        ],
      });
    } catch (e) {
      throw e;
    }
  }

  async updateEmployee(
    dataEmployee: UpdateEmployeeDto,
  ): Promise<string | Error> {
    try {
      const { id, ...data } = dataEmployee;
      if (data.supervisorId) {
        const supervisor: Employee = await this.employee.findOne({
          where: { id: data.supervisorId },
        });
        if (!supervisor.leader)
          throw new Error(
            'Supervisor inexistente, no se han guardado los cambios',
          );
      }
      console.log('soy dt', data);
      const [row] = await this.employee.update(data, {
        where: { id, leader: false },
      });
      console.log('soy row', row);
      if (!row) throw new Error('No se puede supervisar a un supervisor');
      return 'Datos de empleado modificados';
    } catch (e) {
      throw e;
    }
  }
}
