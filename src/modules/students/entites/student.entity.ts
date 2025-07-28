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
import { IStudentAttributes } from '../interfaces/student.interface';

@Table({
  timestamps: false,
  underscored: true,
  tableName: 'students',
})
export class Student
  extends Model<IStudentAttributes>
  implements IStudentAttributes
{
  @PrimaryKey
  @Column({ type: DataType.STRING })
  studentId: string;

  @Column({ type: DataType.STRING })
  firstName: string;

  @Column({ type: DataType.STRING })
  lastName: string;

  @Column({ type: DataType.INTEGER })
  age: number;

  @Column({ type: DataType.STRING })
  profession: string;

  @ForeignKey(() => Class)
  @Column({ type: DataType.INTEGER })
  classId: number | null;

  @BelongsTo(() => Class)
  class?: Class;
}
