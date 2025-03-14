/* eslint-disable prettier/prettier */
import { IsString, IsDate } from 'class-validator';

export class CreateVoucherDto {
   
    @IsString()
    VoucherCode: string;
  
    @IsDate()
    ValidatedOn: Date;
  
    @IsString()
    WorkspaceId: string;
  
    @IsString()
    WinningChallengeId: string;
  
    @IsString()
    CreatedById: string;
  
    @IsDate()
    CreatedOn: Date;
  
    @IsString()
    LastModifiedById: string;
  
    @IsDate()
    LastModifiedOn: Date;
  
    @IsString()
    SubmissionId: string;
  
    @IsString()
    VoucherPrize: string;
  
    @IsString()
    VoucherPrizeEn: string;
}