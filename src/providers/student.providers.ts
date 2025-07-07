import { Student } from 'src/models/student.entity';

export const studentProviders = [
  {
    provide: 'STUDENT_REPOSITORY',
    useValue: Student,
  },
];