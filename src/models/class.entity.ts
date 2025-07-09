import {
  Model,
  Table,
  Column,
  PrimaryKey,
  BelongsToMany,
} from 'sequelize-typescript';
import { Assignment } from './assignments.model';
import { Student } from './student.entity';

@Table({
  tableName: 'classes',
  timestamps: false,
})
export class Class extends Model {
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

  @BelongsToMany(() => Student, () => Assignment)
  students: Student[];
}
