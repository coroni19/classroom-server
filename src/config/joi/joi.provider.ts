import 'dotenv/config';
import * as Joi from '@hapi/joi';
import { Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

export const JoiProvider: Provider = {
  provide: 'JOI',
  useFactory: async () => {
    const envValidation = Joi.object({
      DB_HOST: Joi.string().required(),
      DB_SCHEMA: Joi.string().required(),
      DB_PORT: Joi.number().default(5432),
      DB_DATABASE: Joi.string().required(),
      DB_USERNAME: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
    });

    return ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: envValidation,
    });
  },
};
