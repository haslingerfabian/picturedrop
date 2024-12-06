/* eslint-disable prettier/prettier */
import { IsString, IsDate , IsOptional } from 'class-validator';

export class UpdateVoucherDto {
  @IsString()
  @IsOptional()
  VoucherCode?: string;

  @IsDate()
  @IsOptional()
  ValidatedOn?: Date;

  @IsString()
  @IsOptional()
  WorkspaceId?: string;

  @IsString()
  @IsOptional()
  WinningChallengeId?: string;

  @IsString()
  @IsOptional()
  CreatedById?: string;

  @IsDate()
  @IsOptional()
  CreatedOn?: Date;

  @IsString()
  @IsOptional()
  LastModifiedById?: string;
  
  @IsDate()
  @IsOptional()
  LastModifiedOn?: Date;

  @IsString()
  @IsOptional()
  SubmissionId?: string;

  @IsString()
  @IsOptional()
  VoucherPrize?: string;

  @IsString()
  @IsOptional()
  VoucherPrizeEn?: string;
}