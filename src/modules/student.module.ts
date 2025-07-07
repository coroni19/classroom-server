import { Module } from '@nestjs/common';
import { DatabaseModule } from '../DB/database.module';
import { StudentController } from 'src/controllers/students.controller';
import { StudentService } from 'src/services/student.service';
import { studentProviders } from 'src/providers/student.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [
    StudentService,
    ...studentProviders,
  ],
})
export class StudentModule {}