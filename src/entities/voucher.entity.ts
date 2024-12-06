/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vouchers')
export class Vouchers {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  VoucherCode: string;

  @Column()
  ValidatedOn: Date;

  @Column()
  WorkspaceId: string;

  @Column()
  WinningChallengeId: string;

  @Column()
  CreatedById: string;

  @Column()
  CreatedOn: Date;

  @Column()
  LastModifiedById: string;

  @Column()
  LastModifiedOn: Date;

  @Column()
  SubmissionId: string;

  @Column()
  VoucherPrize: string;

  @Column()
  VoucherPrizeEn: string;
}