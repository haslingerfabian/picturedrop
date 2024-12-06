/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoucherDto } from '../dto/voucherCreate.dto';
import { UpdateVoucherDto } from '../dto/voucherUpdate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vouchers } from '../entities/voucher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Vouchers) private userRepository: Repository<Vouchers>,
  ) {}

  // User erstellen
  async create(createVoucherDto: CreateVoucherDto): Promise<Vouchers> {
    const vouchers = new Vouchers();
    vouchers.VoucherCode = createVoucherDto.VoucherCode;
    vouchers.ValidatedOn = createVoucherDto.ValidatedOn;
    vouchers.WorkspaceId = createVoucherDto.WorkspaceId;
    vouchers.WinningChallengeId = createVoucherDto.WinningChallengeId;
    vouchers.CreatedById = createVoucherDto.CreatedById;
    vouchers.CreatedOn = createVoucherDto.CreatedOn;
    vouchers.LastModifiedById = createVoucherDto.LastModifiedById;
    vouchers.LastModifiedOn = createVoucherDto.LastModifiedOn;
    vouchers.SubmissionId = createVoucherDto.SubmissionId;
    vouchers.VoucherPrize = createVoucherDto.VoucherPrize;
    vouchers.VoucherPrizeEn = createVoucherDto.VoucherPrizeEn;
    
    return await this.userRepository.save(vouchers);
  }

  // Alle User abrufen
  async findAll(): Promise<Vouchers[]> {
    return await this.userRepository.find();
  }

  // Einen User anhand der ID abrufen
  async findOne(Id: number): Promise<Vouchers> {
    const user = await this.userRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException(`User with id ${Id} not found`);
    }
    return user;
  }

  // User aktualisieren
  async update(Id: number, updateVoucherDto: UpdateVoucherDto): Promise<Vouchers> {
    const user = await this.userRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.update({ Id }, updateVoucherDto);
    return { ...user, ...updateVoucherDto }; // Rückgabe des aktualisierten Users
  }
}