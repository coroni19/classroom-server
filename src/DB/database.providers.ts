import { Sequelize } from 'sequelize-typescript';
import { Class } from 'src/models/class.entity';
import { Student } from 'src/models/student.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'postgres',
      });
      sequelize.addModels([Class, Student]);
      await sequelize.sync();
      return sequelize;
    },
  },
];