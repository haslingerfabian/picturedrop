/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vouchers')
export class Vouchers {

  @ApiProperty({ type: Number })
  @PrimaryGeneratedColumn()
  Id: number;

  @ApiProperty({ type: String })
  @Column()
  VoucherCode: string;

  @ApiProperty({ type: Date })
  @Column()
  ValidatedOn: Date;

  @ApiProperty({ type: String })
  @Column()
  WorkspaceId: string;

  @ApiProperty({ type: String })
  @Column()
  WinningChallengeId: string;

  @ApiProperty({ type: String })
  @Column()
  CreatedById: string;

  @ApiProperty({ type: Date })
  @Column()
  CreatedOn: Date;

  @ApiProperty({ type: String })
  @Column()
  LastModifiedById: string;

  @ApiProperty({ type: Date })
  @Column()
  LastModifiedOn: Date;

  @ApiProperty({ type: String })
  @Column()
  SubmissionId: string;

  @ApiProperty({ type: String })
  @Column()
  VoucherPrize: string;

  @ApiProperty({ type: String })
  @Column()
  VoucherPrizeEn: string;
}