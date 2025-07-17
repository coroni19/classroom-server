import {
  Matches,
  IsNumber,
  IsString,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';
import {
  NAMES_MAX_LENGTH,
  VALID_STRING_REGEX,
} from 'src/constants/validation.const';

export class CreateClassDto {
  @IsNumber()
  @IsNotEmpty()
  classId: number;

  @IsString()
  @Matches(VALID_STRING_REGEX)
  @MaxLength(NAMES_MAX_LENGTH)
  className: string;

  @IsNumber()
  @IsNotEmpty()
  maxSeats: number;
}
