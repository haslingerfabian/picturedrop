/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsDate } from 'class-validator';

export class UpdateSubmissionItemDto{
    @IsNumber()
    Id: number;

    @IsNumber()
    SubmissionId: number;

    @IsString()
    ContentType: string;

    @IsString()
    ContentLength: number;

    @IsString()
    Rating: number;

    @IsString()
    Orientation: number;

    @IsString()
    CreatedById: number;

    @IsDate()
    CreatedOn: Date;

    @IsNumber()
    LastModifiedById: number;

    @IsDate()
    LastModifiedOn: Date;
}