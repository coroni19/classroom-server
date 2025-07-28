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
  IL_LOCAL,
  NAMES_MAX_LENGTH,
  VALID_STRING_REGEX,
  MIN_POSITIVE_NUMBER,
} from 'src/constants/validation.const';

import { Column } from 'sequelize-typescript';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @IsIdentityCard(IL_LOCAL)
  studentId: string;

  @IsString()
  @Matches(VALID_STRING_REGEX)
  @MaxLength(NAMES_MAX_LENGTH)
  firstName: string;

  @IsString()
  @Matches(VALID_STRING_REGEX)
  @MaxLength(NAMES_MAX_LENGTH)
  lastName: string;

  @Column
  @IsNumber()
  @Max(MAX_AGE)
  @Min(MIN_POSITIVE_NUMBER)
  age: number;

  @IsString()
  @IsNotEmpty()
  @Matches(VALID_STRING_REGEX)
  profession: string;
}
