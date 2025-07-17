import { Optional } from "sequelize";

export interface IClassAttributes {
classId: number,
className: string,
maxSeats: number,
}

export interface IClassCreationAttributes extends Optional<IClassAttributes, "classId"> {}

