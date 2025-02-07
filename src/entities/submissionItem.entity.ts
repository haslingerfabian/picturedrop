/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SubmissionItems')
export class SubmissionItem {
    @ApiProperty({ type: Number })
    @PrimaryGeneratedColumn()
    Id: number;
  
    @ApiProperty({ type: Number })
    @Column()
    SubmissionId: number;
  
    @ApiProperty({ type: Number })
    @Column()
    FileId: number;
  
    @ApiProperty({ type: Number })
    @Column()
    ThumbnailId: number;
  
    @ApiProperty({ type: Number })
    @Column()
    Width: number;
  
    @ApiProperty({ type: Number })
    @Column()
    Height: number;
  
    @ApiProperty({ type: String })
    @Column()
    ContentType: string;
  
    @ApiProperty({ type: Number })
    @Column()
    ContentLength: number;
  
    @ApiProperty({ type: Number })
    @Column()
    Rating: number;
  
    @ApiProperty({ type: Number })
    @Column()
    Orientation: number;
  
    @ApiProperty({ type: Number })
    @Column()
    CreatedById: number;
  
    @ApiProperty({ type: Date })
    @Column()
    CreatedOn: Date;
  
    @ApiProperty({ type: Number })
    @Column()
    LastModifiedById: number;
  
    @ApiProperty({ type: Date })
    @Column()
    LastModifiedOn: Date;
}