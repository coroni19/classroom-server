import {
  Model,
  Table,
  Column,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

import { Student } from '../../students/entites/student.entity';
import { IClassAttributes } from '../interfaces/class.interface';

@Table({
  timestamps: false,
  underscored: true,
  tableName: 'classes',
})
export class Class extends Model<IClassAttributes> implements IClassAttributes {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  classId: number;

  @Column({ type: DataType.STRING })
  className: string;

  @Column({ type: DataType.INTEGER })
  maxSeats: number;

  @HasMany(() => Student)
  students?: Student[];
}
