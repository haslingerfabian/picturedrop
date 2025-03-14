/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Param } from '@nestjs/common';
import { VouchersService } from '../services/voucher.service';
import { Vouchers } from '../entities/voucher.entity';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('vouchers')
@Controller('vouchers') // Der Controller ist unter der Route '/vouchers' erreichbar
export class VouchersController {
  constructor(private readonly voucherService: VouchersService) {}
  
  @ApiOperation({
    operationId: 'getAllVouchers',
    summary: 'Get all vouchers'
  })
  @ApiResponse({type: Vouchers})
  @Get()
  async findAll(): Promise<Vouchers[]> {
    return this.voucherService.findAll();
  }

  @ApiOperation({
    operationId: 'getVoucherById',
    summary: 'get voucher by id'
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Vouchers> {
        return this.voucherService.findOne(id);
  }

}
