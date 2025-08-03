import { Provider } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Class } from '../../modules/classes/entities/class.entity';
import { Student } from '../../modules/students/entites/student.entity';

export const DatabaseProvider: Provider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      schema: process.env.DB_SCHEMA,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
    sequelize.addModels([Class, Student]);
    await sequelize.sync();
    return sequelize;
  },
};
