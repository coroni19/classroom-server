import {
  Table,
  Model,
  Column,
  BelongsTo,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Class } from './class.entity';
import { Student } from './student.entity';

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
