import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService],
    }).compile();

    employeeController = app.get<EmployeeController>(EmployeeController);
    employeeService = app.get<EmployeeService>(EmployeeService);
  });

  describe('create', () => {
    it('should return a string on successful creation', async () => {
      const createEmployeeDto: CreateEmployeeDto = {
        firstName: 'Daniel',
        lastName: 'Diaz',
        email: 'd.diaz@cbc.com',
        phone: '1122336655',
        leader: false,
      };

      jest
        .spyOn(employeeService, 'create')
        .mockImplementation(async () => 'Employee created successfully');

      const result = await employeeController.create(createEmployeeDto);
      expect(result).toEqual('Employee created successfully');
    });

    it('should throw an error on failed creation', async () => {
      const createEmployeeDto: CreateEmployeeDto = {
        firstName: 'Daniel',
        lastName: 'Diaz',
        email: 'd.diaz@cbc.com',
        phone: '1122336655',
        leader: false,
      };

      const errorMessage = 'Error creating employee';
      jest
        .spyOn(employeeService, 'create')
        .mockRejectedValue(new Error(errorMessage));

      await expect(
        employeeController.create(createEmployeeDto),
      ).rejects.toThrow(errorMessage);
    });
  });

  describe('findAll', () => {
    it('should return an array of employees', async () => {
      const mockEmployees: CreateEmployeeDto[] = [
        {
          firstName: 'Daniel',
          lastName: 'Diaz',
          email: 'd.diaz@cbc.com',
          phone: '1122336655',
          leader: false,
        },
        {
          firstName: 'Martina',
          lastName: 'Diaz',
          email: 'm.diaz@cbc.com',
          phone: '1122336656',
          leader: false,
        },
      ];

      jest
        .spyOn(employeeService, 'findAllEmployees')
        .mockImplementation(async () => mockEmployees);

      const result = await employeeController.findAll();
      expect(result).toEqual(mockEmployees);
    });

    it('should throw an error on failed fetch', async () => {
      const errorMessage = 'Error fetching employees';
      jest
        .spyOn(employeeService, 'findAllEmployees')
        .mockRejectedValue(new Error(errorMessage));

      await expect(employeeController.findAll()).rejects.toThrow(errorMessage);
    });
  });
});
