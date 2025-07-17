import {
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Controller,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/createStudent.dto';
import { UpdateClassDto } from '../classes/dto/updateClass.dto';
import { Student } from 'src/modules/students/entites/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Delete('/:studentId')
  async deleteStudent(
    @Param('studentId') studentId: string,
  ): Promise<{ message: string }> {
    await this.studentService.deleteStudent(studentId);
    return {
      message: `Student with ID ${studentId} has been deleted successfully`,
    };
  }

  @Patch('/unassign/:studentId')
  async unassignStudentFromClass(
    @Param('studentId') studentId: string,
  ): Promise<{ message: string }> {
    await this.studentService.unassignStudentFronClass(studentId);
    return {
      message: `Student with ID ${studentId} has been successfully unassigned`,
    };
  }

  @Patch('/assign/:studentId')
  async assignClass(
    @Param('studentId') studentId: string,
    @Body() classId: UpdateClassDto,
  ): Promise<{ message: string }> {

    await this.studentService.assignClass(studentId, classId.classId!);
    return {
      message: `Student with ID ${studentId} has been successfully assigned to class with ID ${classId.classId}`,
    };
  }

  @Post()
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<{ message: string }> {
    await this.studentService.createStudent(createStudentDto);
    return {
      message: 'Student created!',
    };
  }
}
