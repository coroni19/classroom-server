import { Module } from '@nestjs/common';
import { DatabaseModule } from '../DB/database.module';
import { ClassService } from 'src/services/class.service';
import { classProviders } from 'src/providers/class.providers';
import { ClassController } from 'src/controllers/class.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [
    ClassService,
    ...classProviders,
  ],
})
export class ClassModule {}