import { Module } from '@nestjs/common';
import { DatabaseModule } from '../DB/database.module';
import { AssignmentController } from 'src/controllers/assignment.controller';
import { AssignmentService } from 'src/services/assignments.service';
import { assignmentProviders } from 'src/providers/assignment.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AssignmentController],
  providers: [
    AssignmentService,
    ...assignmentProviders,
  ],
})
export class AssignmentModule {}