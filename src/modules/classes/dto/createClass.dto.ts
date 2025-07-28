import {
  Min,
  Matches,
  IsNumber,
  IsString,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';

import {
  NAMES_MAX_LENGTH,
  VALID_STRING_REGEX,
  MIN_POSITIVE_NUMBER,
} from 'src/constants/validation.const';

export class CreateClassDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(MIN_POSITIVE_NUMBER)
  classId: number;

  @IsString()
  @Matches(VALID_STRING_REGEX)
  @MaxLength(NAMES_MAX_LENGTH)
  className: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(MIN_POSITIVE_NUMBER)
  maxSeats: number;
}
