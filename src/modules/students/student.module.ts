import { Module } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { StudentService } from 'src/modules/students/student.service';
import { DatabaseModule } from '../../config/database/database.module';
import { StudentController } from 'src/modules/students/students.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
