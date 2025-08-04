import { Optional } from 'sequelize';

export interface IStudent {
  age: number;
  lastName: string;
  studentId: string;
  firstName: string;
  profession: string;
  classId: number | null;
}

export interface IStudentCreationAttributes
  extends Optional<IStudent, 'studentId'> {}

export interface IstudentsInClassAttributes {
  classId: number;
  studentId: string;
}
