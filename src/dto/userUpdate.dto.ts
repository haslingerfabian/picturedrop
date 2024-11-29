/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  Username?: string;

  @IsString()
  @IsOptional()
  Firstname?: string;

  @IsString()
  @IsOptional()
  Lastname?: string;

  @IsEmail()
  @IsOptional()
  Email?: string;

  @IsString()
  @IsOptional()
  StripeCustomerId?: string;
}