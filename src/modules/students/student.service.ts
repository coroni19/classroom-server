import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { CreateStudentDto } from './dto/createStudent.dto';
import { Student } from 'src/modules/students/entites/student.entity';
import { ItemDoesntExistException } from 'src/exceptions/item-doesnt-exist.exception';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.findAll();
  }

  async deleteStudent(studentId: string): Promise<void> {
    await this.studentRepository.deleteStudent(studentId);
  }

  async unassignStudentFronClass(studentId: string): Promise<void> {
    const student = await this.studentRepository.findStudentById(studentId);

    if (!student) {
      throw new ItemDoesntExistException('Student', studentId);
    }

    await this.studentRepository.unassignStudentFronClass(studentId);
  }

  async assignClass(studentId: string, classId: number): Promise<void> {
    const student = await this.studentRepository.findStudentById(studentId);

    if (!student) {
      throw new ItemDoesntExistException('Student', studentId);
    }

    await this.studentRepository.assignClass(studentId, classId);
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<void> {
    await this.studentRepository.createStudent(createStudentDto);
  }
}
