/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { SubmissionItemService } from '../services/submissionitem.service';
import { SubmissionItem } from '../entities/submissionitem.entity';

@Controller('submissionItems') // Der Controller ist unter der Route '/vouchers' erreichbar
export class SubmissionItemController {
  constructor(private readonly usersService: SubmissionItemService) {}
  
  @Get()
  async findAll(): Promise<SubmissionItem[]> {
    return this.usersService.findAll();
  }
}