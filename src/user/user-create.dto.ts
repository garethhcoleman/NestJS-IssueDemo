import {
  IsOptional,
  IsString,
  MaxLength,
  IsMobilePhone,
} from 'class-validator';
import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty({ example: 'Testy'})
  @IsString()
  @MaxLength(255)
  firstName: string;

  @ApiPropertyOptional({ example: 'McTestface'})
  @IsOptional()
  @IsString()
  @MaxLength(255)
  lastName?: string | null;

  @ApiPropertyOptional({ example: '+447968123456'})
  @IsOptional()
  @IsMobilePhone(null,{ strictMode: true },{message: 'Must be a valid mobile starting with + (eg +447968123456)',},)
  @MaxLength(20)
  mobile?: string | null;
}