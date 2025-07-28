import { Module } from '@nestjs/common';
import { ClassRepository } from './class.repository';
import { DatabaseModule } from '../../DB/database.module';
import { ClassService } from 'src/modules/classes/class.service';
import { ClassController } from 'src/modules/classes/class.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [ClassService, ClassRepository],
})
export class ClassModule {}
