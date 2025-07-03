import { Module } from '@nestjs/common';
import { StudentController } from '../controllers/students.controller';
import { StudentService } from '../services/student.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Student } from 'src/models/student.model';

@Module({
  imports: [SequelizeModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
