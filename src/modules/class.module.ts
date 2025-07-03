import { Module } from '@nestjs/common';
import { ClassController } from '../controllers/class.controller';
import { ClassService } from '../services/class.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Class } from 'src/models/class.model';

@Module({
  imports: [SequelizeModule.forFeature([Class])],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
