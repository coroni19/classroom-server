import { Injectable } from '@nestjs/common';
import { Student } from './entites/student.entity';
import { CreateStudentDto } from './dto/createStudent.dto';

@Injectable()
export class StudentRepository {
  public async createStudent(
    createStudentDto: CreateStudentDto,
  ): Promise<void> {
    await Student.create(createStudentDto);
  }

  public async findAll(): Promise<Student[]> {
    return await Student.findAll<Student>();
  }

  public async deleteStudent(id: string): Promise<void> {
    await Student.destroy({ where: { studentId: id } });
  }

  public async findStudentById(studentId: string): Promise<Student | null> {
    return await Student.findByPk<Student>(studentId);
  }

  public async unassignStudentFronClass(id: string): Promise<void> {
    await Student.update({ classId: null }, { where: { studentId: id } });
  }

  public async assignClass(studentId: string, classId: number): Promise<void> {
    await Student.update(
      { classId: classId },
      { where: { studentId: studentId } },
    );
  }
}
