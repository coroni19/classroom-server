import {
  Model,
  Table,
  Column,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: "students",
  timestamps: false
})
export class Student extends Model {
  @PrimaryKey
  @Column({
    field: "student_id"
  })
  studentId: number;

  @Column({
    field: "first_name"
  })
  firstName: string;

  @Column({
    field: "last_name"
  })
  lastName: string;

  @Column
  age: number;

  @Column
  profession: string;
}
