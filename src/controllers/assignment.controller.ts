import { Controller, Delete, Get, Param } from '@nestjs/common';
import { AssignmentService } from 'src/services/assignments.service';

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Delete('/:classId/:studentId')
  async deleteStudent(
    @Param('classId') classId: number,
    @Param('studentId') studentId: string,
  ): Promise<{ message: string }> {
    await this.assignmentService.deleteAssignment(classId, studentId);
    return {
      message: `Assignment with of class with ID ${classId} and student with ID ${studentId} has been deleted successfully`,
    };
  }
}
