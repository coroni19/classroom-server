import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Student } from 'src/models/student.entity';
import { StudentService } from '../services/student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Delete('/:id')
  async deleteStudent(@Param('id') id: string): Promise<{ message: string }> {
    await this.studentService.deleteStudent(id);
    return { message: `Student with ID ${id} has been deleted successfully` };
  }
}
