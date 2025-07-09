import { Assignment } from 'src/models/assignments.model';

export const assignmentProviders = [
  {
    provide: 'ASSIGNMENT_REPOSITORY',
    useValue: Assignment,
  },
];
