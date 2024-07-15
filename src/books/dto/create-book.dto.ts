import {
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  @Min(1000)
  @Max(new Date().getFullYear())
  publishYear: number;

  @IsBoolean()
  isAvailable: boolean;
}
