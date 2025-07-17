import {
  Model,
  Table,
  Column,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { Student } from '../../students/entites/student.entity';
import { IClassCreationAttributes } from '../interfaces/class.interface';

@Table({
  tableName: 'classes',
  timestamps: false,
})
export class Class extends Model<Class, IClassCreationAttributes> {
  @PrimaryKey
  @Column({
    field: 'class_id',
  })
  classId: number;

  @Column({
    field: 'class_name',
  })
  className: string;

  @Column({
    field: 'max_seats',
  })
  maxSeats: number;

  @HasMany(() => Student)
  students: Student[];
}
