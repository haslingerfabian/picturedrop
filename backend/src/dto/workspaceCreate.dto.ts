/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsDate, IsNumber, IsBoolean} from 'class-validator';

export class CreateWorkspaceDto{
    @IsString()
    Name: string;

    @IsString()
    Description: string;

    @IsString()
    DescriptionEn: string;

    @IsString()
    ContactUrl: string;

    @IsString()
    ContactMail: string;

    @IsString()
    ContactPhone: string;

    @IsString()
    FirstName: string;

    @IsString()
    LastName: string;

    @IsDate()
    DateOfBirth: Date;

    @IsString()
    AddressLine1: string;

    @IsString()
    AddressLine2: string;

    @IsString()
    PostalCode: string;

    @IsString()
    City: string;

    @IsNumber()
    CountryId: number;

    @IsString()
    CompanyName: string;

    @IsString()
    CompanyVat: string;

    @IsString()
    CompanyDataProtectionUrl: string;

    @IsString()
    UploadLimit: string;

    @IsString()
    StripeSubscriptionId: string;

    @IsString()
    StripeSessionId: string;

    @IsString()
    SubscriptionStatus: string;

    @IsString()
    SubscriptionEndDate: string;

    @IsString()
    TrialStartOn: string;

    @IsString()
    TrialEndsOn: string;

    @IsNumber()
    OwnerId: number;

    @IsNumber()
    FileId: number;

    @IsNumber()
    DefaultPrizeId: number;

    @IsBoolean()
    HasPassword: boolean;

    @IsString()
    Password: string;

    @IsString()
    Slug: string;

    @IsNumber()
    CreatedById: number;

    @IsString()
    CreatedOn: string;

    @IsNumber()
    LastModifiedById: number;

    @IsString()
    LastModifiedOn: string;
}