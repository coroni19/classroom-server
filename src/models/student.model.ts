import {
  Model,
  Table,
  Column,
  NotNull,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class Student extends Model {
  @PrimaryKey
  @Column
  studentId: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  age: number;

  @Column
  profession: string;
}
