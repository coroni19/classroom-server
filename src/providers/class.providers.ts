import { Class } from 'src/models/class.entity';

export const classProviders = [
  {
    provide: 'CLASS_REPOSITORY',
    useValue: Class,
  },
];