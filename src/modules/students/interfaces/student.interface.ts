import { Optional } from 'sequelize';

export interface IStudentAttributes {
  studentId: string;
  firstName: string;
  lastName: string;
  age: number;
  profession: string;
  classId: number | null;
}

export interface IStudentCreationAttributes
  extends Optional<IStudentAttributes, 'studentId'> {}

export interface IstudentsInClassAttributes {
  classId: number;
  studentId: string;
}
