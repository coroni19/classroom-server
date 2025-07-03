import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Class } from './models/class.model';
import { Student } from './models/student.model';
import { StudentModule } from './modules/student.module';
import { ClassModule } from './modules/class.module';
// import { StudentsAssignments } from './models/studentsAssignments.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'db',
      schema: 'classroom',
      models: [Class, Student],
    }),
    StudentModule,
    ClassModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
