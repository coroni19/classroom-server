import { Injectable, Inject } from '@nestjs/common';
import { Class } from 'src/models/class.entity';
import { Student } from 'src/models/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: typeof Student,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.findAll<Student>({include: [Class]});
  }

  async deleteStudent(id: string): Promise<void> {
    await this.studentRepository.destroy({ where: { student_id: id } });
  }
}
