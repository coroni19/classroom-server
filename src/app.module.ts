import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { JoiModule } from './config/joi/joi.module';
import { ClassModule } from './modules/classes/class.module';
import { StudentModule } from './modules/students/student.module';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [
    ClassModule,
    StudentModule,
    DatabaseModule,
    JoiModule
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
