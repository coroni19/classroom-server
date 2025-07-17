import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DatabaseModule } from './DB/database.module';
import { ClassModule } from './modules/classes/class.module';
import { StudentModule } from './modules/students/student.module';

@Module({
  imports: [DatabaseModule, StudentModule, ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
