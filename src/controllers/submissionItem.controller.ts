/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Param } from '@nestjs/common';
import { SubmissionItemService } from '../services/submissionitem.service';
import { SubmissionItem } from '../entities/submissionitem.entity';
import { CreateSubmissionItemDto } from 'src/dto/submissionitemCreate';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('submissionItems')
@Controller('submissionItems') // Der Controller ist unter der Route '/vouchers' erreichbar
export class SubmissionItemController {
  constructor(private readonly submissionitemService: SubmissionItemService) {}
  
  @ApiOperation({
    operationId: 'getAllSubmissionItems',
    summary: 'Get all submission items'
  })
  @Get()
  async findAll(): Promise<SubmissionItem[]> {
    return this.submissionitemService.findAll();
  }

  @ApiOperation({
    operationId: 'getSubmissionItemById',
    summary: 'Get submission item by id'
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<SubmissionItem> {
         return this.submissionitemService.findOne(id);
  }

}