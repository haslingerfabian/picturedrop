/* eslint-disable prettier/prettier */
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  Username: string;

  @IsString()
  Firstname: string;

  @IsString()
  Lastname: string;

  @IsEmail()
  Email: string;

  @IsString()
  StripeCustomerId: string;
}