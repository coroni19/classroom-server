import {
  Min,
  Max,
  Matches,
  IsString,
  IsNumber,
  MaxLength,
  IsNotEmpty,
  IsIdentityCard,
} from 'class-validator';
import {
  MAX_AGE,
  MIN_AGE,
  IL_LOCAL,
  NAMES_MAX_LENGTH,
  VALID_STRING_REGEX,
} from 'src/constants/validation.const';
import { Column } from 'sequelize-typescript';

export class CreateStudentDto {
  @IsString()
  @IsIdentityCard(IL_LOCAL)
  @IsNotEmpty()
  studentId: string;

  @IsString()
  @Matches(VALID_STRING_REGEX)
  @MaxLength(NAMES_MAX_LENGTH)
  firstName: string;

  @IsString()
  @Matches(VALID_STRING_REGEX)
  @MaxLength(NAMES_MAX_LENGTH)
  lastName: string;

  @IsNumber()
  @Min(MIN_AGE)
  @Max(MAX_AGE)
  @Column
  age: number;

  @IsString()
  @Matches(VALID_STRING_REGEX)
  @IsNotEmpty()
  profession: string;
}
