import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './DB/database.module';
import { ClassModule } from './modules/classes/class.module';
import { validationSchema } from './config/DBValidation.config';
import { StudentModule } from './modules/students/student.module';

@Module({
  imports: [
    ClassModule,
    StudentModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
