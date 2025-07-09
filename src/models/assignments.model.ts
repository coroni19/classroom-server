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

@Table({ tableName: 'assignments', timestamps: false })
export class Assignment extends Model {
  // @PrimaryKey
  @ForeignKey(() => Class)
  @Column({
    field: 'class_id',
  })
  classId: number;

  @BelongsTo(() => Class)
  class: Class;

  // @PrimaryKey
  @ForeignKey(() => Student)
  @Column({
    field: 'student_id',
  })
  studentId: number;

  @BelongsTo(() => Student)
  student: Student;
}
