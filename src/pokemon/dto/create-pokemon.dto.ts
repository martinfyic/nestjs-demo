import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  IsUrl,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @MinLength(2)
  @MaxLength(45)
  name: string;
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
  @IsUrl()
  @IsNotEmpty()
  url: string;
}
