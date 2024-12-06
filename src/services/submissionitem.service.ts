/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubmissionItemDto } from '../dto/submissionitemCreate'
import { UpdateSubmissionItemDto } from '../dto/submissionitemUpdate'
import { InjectRepository } from '@nestjs/typeorm';
import { SubmissionItem } from '../entities/submissionItem.entity'
import { Repository } from 'typeorm';

@Injectable()
export class SubmissionItemService {
  constructor(
    @InjectRepository(SubmissionItem) private userRepository: Repository<SubmissionItem>,
  ) {}

  // User erstellen
  async create(createsubmissionItemDto: CreateSubmissionItemDto): Promise<SubmissionItem> {
    const submissionitem = new SubmissionItem();

    submissionitem.Id = createsubmissionItemDto.Id;
    submissionitem.SubmissionId = createsubmissionItemDto.SubmissionId;
    submissionitem.FileId = createsubmissionItemDto.FileId;
    submissionitem.ThumbnailId = createsubmissionItemDto.ThumbnailId;
    submissionitem.Width = createsubmissionItemDto.Width;
    submissionitem.Height = createsubmissionItemDto.Height;
    submissionitem.ContentType = createsubmissionItemDto.ContentType;
    submissionitem.ContentLength = createsubmissionItemDto.ContentLength;
    submissionitem.Rating = createsubmissionItemDto.Rating;
    submissionitem.Orientation = createsubmissionItemDto.Orientation;
    submissionitem.CreatedById = createsubmissionItemDto.CreatedById;
    submissionitem.CreatedOn = createsubmissionItemDto.CreatedOn;
    submissionitem.LastModifiedById = createsubmissionItemDto.LastModifiedById;
    submissionitem.LastModifiedOn = createsubmissionItemDto.LastModifiedOn;
    
    return await this.userRepository.save(submissionitem);
  }
     // Alle User abrufen
  async findAll(): Promise<SubmissionItem[]> {
    return await this.userRepository.find();
  }

  // Einen User anhand der ID abrufen
  async findOne(Id: number): Promise<SubmissionItem> {
    const user = await this.userRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException(`User with id ${Id} not found`);
    }
    return user;
  }

  // User aktualisieren
  async update(Id: number, updateUserDto: UpdateSubmissionItemDto): Promise<SubmissionItem> {
    const user = await this.userRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.update({ Id }, updateUserDto);
    return { ...user, ...updateUserDto }; // Rückgabe des aktualisierten Users
  }
}