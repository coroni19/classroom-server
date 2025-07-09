import { Injectable, Inject } from '@nestjs/common';
import { Assignment } from 'src/models/assignments.model';

@Injectable()
export class AssignmentService {
  constructor(
    @Inject('ASSIGNMENT_REPOSITORY')
    private assignmentRepository: typeof Assignment,
  ) {}


  async deleteAssignment(classId: number, studentId: string): Promise<void> {
    await this.assignmentRepository.destroy({ where: { student_id: studentId, class_id: classId}});
  }
}
