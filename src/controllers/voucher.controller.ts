/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { VouchersService } from '../services/voucher.service';
import { Vouchers } from '../entities/voucher.entity';

@Controller('vouchers') // Der Controller ist unter der Route '/vouchers' erreichbar
export class VouchersController {
  constructor(private readonly usersService: VouchersService) {}
  
  @Get()
  async findAll(): Promise<Vouchers[]> {
    return this.usersService.findAll();
  }
}
