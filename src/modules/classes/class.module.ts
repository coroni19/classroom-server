import { Module } from '@nestjs/common';
import { ClassRepository } from './class.repository';
import { ClassService } from 'src/modules/classes/class.service';
import { DatabaseModule } from '../../config/database/database.module';
import { ClassController } from 'src/modules/classes/class.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [ClassService, ClassRepository],
})
export class ClassModule {}
