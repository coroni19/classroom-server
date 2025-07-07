import {
  Model,
  Table,
  Column,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: "classes",
  timestamps: false
})
export class Class extends Model {
  @PrimaryKey
  @Column({
    field: "class_id"
  })
  classId: number;

  @Column({
    field: "class_name"
  })
  className: string;

  @Column({
    field: "max_seats"
  })
  maxSeats: number;
}
