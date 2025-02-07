/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsDate, IsOptional} from 'class-validator';

export class CreateSubmissionItemDto {

    @IsNumber()
    @IsOptional()
    Id?: number;

    @IsNumber()
    @IsOptional()
    SubmissionId?: number;

    @IsString()
    @IsOptional()
    ContentType?: string;

    @IsString()
    @IsOptional()
    ContentLength?: number;

    @IsString()
    @IsOptional()
    Rating?: number;

    @IsString()
    @IsOptional()
    Orientation?: number;

    @IsString()
    @IsOptional()
    CreatedById?: number;

    @IsDate()
    @IsOptional()
    CreatedOn?: Date;

    @IsNumber()
    @IsOptional()
    LastModifiedById?: number;

    @IsDate()
    @IsOptional()
    LastModifiedOn?: Date;
}