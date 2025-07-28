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
import { AssignStduentToClassDto } from './dto/updateStudent.dto';
import { Student } from 'src/modules/students/entites/student.entity';
import { PrimaryKeyException } from 'src/exceptions/PrimaryKey.exception';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    try {
      return this.studentService.findAll();
    } catch (error) {
      throw new Error('Something went wrong, cant load students');
    }
  }

  @Delete('/:studentId')
  async deleteStudent(@Param('studentId') studentId: string) {
    try {
      await this.studentService.deleteStudent(studentId);
    } catch (error) {
      throw error;
    }
  }

  @Patch('/assign/:studentId')
  async assignClass(
    @Param('studentId') studentId: string,
    @Body() classId: AssignStduentToClassDto,
  ) {
    try {
      await this.studentService.assignClass(studentId, classId.classId);
    } catch (error) {
      throw new Error('Something went wrong, cant assign student');
    }
  }

  @Post()
  async createStudent(@Body() createStudentDto: CreateStudentDto) {
    try {
      await this.studentService.createStudent(createStudentDto);
    } catch (error) {
      if (error.name === 'SequelizeDatabaseError') {
        throw new PrimaryKeyException(
          'Student',
          String(createStudentDto.studentId),
        );
      }
      throw error;
    }
  }

  @Patch('/unassign/:studentId')
  async unassignStudentFromClass(@Param('studentId') studentId: string) {
    try {
      await this.studentService.unassignStudentFronClass(studentId);
    } catch (error) {
      throw error;
    }
  }
}
