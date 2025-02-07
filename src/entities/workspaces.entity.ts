/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Workspaces')
export class Workspace {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    Description: string;

    @Column()
    DescriptionEn: string;

    @Column()
    ContactUrl: string;

    @Column()
    ContactMail: string;

    @Column()
    ContactPhone: string;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;

    @Column()
    DateOfBirth: Date;

    @Column()
    AddressLine1: string;

    @Column()
    AddressLine2: string;

    @Column()
    PostalCode: string;

    @Column()
    City: string;

    @Column()
    CountryId: number;

    @Column()
    CompanyName: string;

    @Column()
    CompanyVat: string;

    @Column()
    CompanyDataProtectionUrl: string;

    @Column()
    UploadLimit: string;

    @Column()
    StripeSubscriptionId: string;

    @Column()
    StripeSessionId: string;

    @Column()
    SubscriptionStatus: string;

    @Column()
    SubscriptionEndDate: string;

    @Column()
    TrialStartOn: string;

    @Column()
    TrialEndsOn: string;

    @Column()
    OwnerId: number;

    @Column()
    FileId: number;

    @Column()
    DefaultPrizeId: number;

    @Column()
    HasPassword: boolean;

    @Column()
    Password: string;

    @Column()
    Slug: string;

    @Column()
    CreatedById: number;

    @Column()
    CreatedOn: string;

    @Column()
    LastModifiedById: number;

    @Column()
    LastModifiedOn: string;
}