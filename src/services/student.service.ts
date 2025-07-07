import { Injectable, Inject } from '@nestjs/common';
import { Student } from 'src/models/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: typeof Student,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.findAll<Student>();
  }

  async deleteStudent(id: string): Promise<void> {
    await this.studentRepository.destroy({ where: { student_id: id } });
  }
}
