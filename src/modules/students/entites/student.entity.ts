import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Class } from '../../classes/entities/class.entity';
import { IStudentCreationAttributes } from '../interfaces/student.interface';

@Table({
  tableName: 'students',
  timestamps: false,
})
export class Student extends Model<Student, IStudentCreationAttributes> {
  @PrimaryKey
  @Column({
    field: 'student_id',
  })
  studentId: string;

  @Column({
    field: 'first_name',
  })
  firstName: string;

  @Column({
    field: 'last_name',
  })
  lastName: string;

  @Column
  age: number;

  @Column
  profession: string;

  @ForeignKey(() => Class)
  @Column({
    field: 'class_id',
    type: DataType.NUMBER
  })
  classId: number | null;

  @BelongsTo(() => Class)
  class: Class;
}
