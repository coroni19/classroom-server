import {
  Model,
  Table,
  Column,
  NotNull,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class Class extends Model {
  @PrimaryKey
  @Column
  classId: number;

  @Column
  className: string;

  @Column
  maxSeats: number;
}
