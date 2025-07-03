import {
  Table,
  Model,
  Column,
  BelongsTo,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Class } from './class.model';
import { Student } from './student.model';

@Table({ tableName: 'students_assignments' })
export class StudentsAssignments extends Model {
  @PrimaryKey
  @ForeignKey(() => Class)
  @Column
  classId: number;

  @BelongsTo(() => Class)
  class: Class;

  @PrimaryKey
  @ForeignKey(() => Student)
  @Column
  studentId: number;

  @BelongsTo(() => Student)
  student: Student;
}
