import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './modules/student.module';
import { ClassModule } from './modules/class.module';
import { DatabaseModule } from './DB/database.module';
import { AssignmentModule } from './modules/assignment.module';

@Module({
  imports: [
    DatabaseModule,
    StudentModule,
    ClassModule,
    AssignmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
