/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsNumber, IsDate, IsBoolean } from 'class-validator';

export class UpdateWorkspaceDto {
    @IsString()
    @IsOptional()
    Name: string;

    @IsString()
    @IsOptional()
    Description: string;

    @IsString()
    @IsOptional()
    DescriptionEn: string;

    @IsString()
    @IsOptional()
    ContactUrl: string;

    @IsString()
    @IsOptional()
    ContactMail: string;

    @IsString()
    @IsOptional()
    ContactPhone: string;

    @IsString()
    @IsOptional()
    FirstName: string;

    @IsString()
    @IsOptional()
    LastName: string;

    @IsDate()
    @IsOptional()
    DateOfBirth: Date;

    @IsString()
    @IsOptional()
    AddressLine1: string;

    @IsString()
    @IsOptional()
    AddressLine2: string;

    @IsString()
    @IsOptional()
    PostalCode: string;

    @IsString()
    @IsOptional()
    City: string;

    @IsNumber()
    @IsOptional()
    CountryId: number;

    @IsString()
    @IsOptional()
    CompanyName: string;

    @IsString()
    @IsOptional()
    CompanyVat: string;

    @IsString()
    @IsOptional()
    CompanyDataProtectionUrl: string;

    @IsString()
    @IsOptional()
    UploadLimit: string;

    @IsString()
    @IsOptional()
    StripeSubscriptionId: string;

    @IsString()
    @IsOptional()
    StripeSessionId: string;

    @IsString()
    @IsOptional()
    SubscriptionStatus: string;

    @IsString()
    @IsOptional()
    SubscriptionEndDate: string;

    @IsString()
    @IsOptional()
    TrialStartOn: string;

    @IsString()
    @IsOptional()
    TrialEndsOn: string;

    @IsNumber()
    @IsOptional()
    OwnerId: number;

    @IsNumber()
    @IsOptional()
    FileId: number;

    @IsNumber()
    @IsOptional()
    DefaultPrizeId: number;

    @IsBoolean()
    @IsOptional()
    HasPassword: boolean;

    @IsString()
    @IsOptional()
    Password: string;

    @IsString()
    @IsOptional()
    Slug: string;

    @IsNumber()
    @IsOptional()
    CreatedById: number;

    @IsString()
    @IsOptional()
    CreatedOn: string;

    @IsNumber()
    @IsOptional()
    LastModifiedById: number;

    @IsString()
    @IsOptional()
    LastModifiedOn: string;
}