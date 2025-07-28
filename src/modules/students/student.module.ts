import { Module } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { DatabaseModule } from '../../DB/database.module';
import { StudentService } from 'src/modules/students/student.service';
import { StudentController } from 'src/modules/students/students.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
