/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Workspaces')
export class Workspace {

      @ApiProperty({ type: Number })
      @PrimaryGeneratedColumn()
      Id: number;
    
      @ApiProperty({ type: String })
      @Column()
      Name: string;
    
      @ApiProperty({ type: String })
      @Column()
      Description: string;
    
      @ApiProperty({ type: String })
      @Column()
      DescriptionEn: string;
    
      @ApiProperty({ type: String })
      @Column()
      ContactUrl: string;
    
      @ApiProperty({ type: String })
      @Column()
      ContactMail: string;
    
      @ApiProperty({ type: String })
      @Column()
      ContactPhone: string;
    
      @ApiProperty({ type: String })
      @Column()
      FirstName: string;
    
      @ApiProperty({ type: String })
      @Column()
      LastName: string;
    
      @ApiProperty({ type: Date })
      @Column()
      DateOfBirth: Date;
    
      @ApiProperty({ type: String })
      @Column()
      AddressLine1: string;
    
      @ApiProperty({ type: String })
      @Column()
      AddressLine2: string;
    
      @ApiProperty({ type: String })
      @Column()
      PostalCode: string;
    
      @ApiProperty({ type: String })
      @Column()
      City: string;
    
      @ApiProperty({ type: Number })
      @Column()
      CountryId: number;
    
      @ApiProperty({ type: String })
      @Column()
      CompanyName: string;
    
      @ApiProperty({ type: String })
      @Column()
      CompanyVat: string;
    
      @ApiProperty({ type: String })
      @Column()
      CompanyDataProtectionUrl: string;
    
      @ApiProperty({ type: String })
      @Column()
      UploadLimit: string;
    
      @ApiProperty({ type: String })
      @Column()
      StripeSubscriptionId: string;
    
      @ApiProperty({ type: String })
      @Column()
      StripeSessionId: string;
    
      @ApiProperty({ type: String })
      @Column()
      SubscriptionStatus: string;
    
      @ApiProperty({ type: String })
      @Column()
      SubscriptionEndDate: string;
    
      @ApiProperty({ type: String })
      @Column()
      TrialStartOn: string;
    
      @ApiProperty({ type: String })
      @Column()
      TrialEndsOn: string;
    
      @ApiProperty({ type: Number })
      @Column()
      OwnerId: number;
    
      @ApiProperty({ type: Number })
      @Column()
      FileId: number;
    
      @ApiProperty({ type: Number })
      @Column()
      DefaultPrizeId: number;
    
      @ApiProperty({ type: Boolean })
      @Column()
      HasPassword: boolean;
    
      @ApiProperty({ type: String })
      @Column()
      Password: string;
    
      @ApiProperty({ type: String })
      @Column()
      Slug: string;
    
      @ApiProperty({ type: Number })
      @Column()
      CreatedById: number;
    
      @ApiProperty({ type: String })
      @Column()
      CreatedOn: string;
    
      @ApiProperty({ type: Number })
      @Column()
      LastModifiedById: number;
    
      @ApiProperty({ type: String })
      @Column()
      LastModifiedOn: string;
}