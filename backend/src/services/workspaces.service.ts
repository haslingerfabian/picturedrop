/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Repository } from 'typeorm';
import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Workspace } from '../entities/workspaces.entity';
import { CreateWorkspaceDto } from '../dto/workspaceCreate.dto';
import { UpdateWorkspaceDto } from '../dto/workspaceUpdate.dto';

@Injectable()
export class WorkspaceService{
    constructor(
        @InjectRepository(Workspace) private workspaceRepository: Repository<Workspace>,
    ) {}

      // workspace erstellen
  async create(createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    const workspace = new Workspace();
    workspace.Name = createWorkspaceDto.Name;
    workspace.Description = createWorkspaceDto.Description;
    workspace.DescriptionEn = createWorkspaceDto.DescriptionEn;
    workspace.ContactUrl = createWorkspaceDto.ContactUrl;
    workspace.ContactMail = createWorkspaceDto.ContactMail;
    workspace.ContactPhone = createWorkspaceDto.ContactPhone;
    workspace.FirstName = createWorkspaceDto.FirstName;
    workspace.LastName = createWorkspaceDto.LastName;
    workspace.DateOfBirth = createWorkspaceDto.DateOfBirth;
    workspace.AddressLine1=createWorkspaceDto.AddressLine1;
    workspace.AddressLine2 = createWorkspaceDto.AddressLine2;
    workspace.PostalCode = createWorkspaceDto.PostalCode;
    workspace.City = createWorkspaceDto.City;
    workspace.CountryId = createWorkspaceDto.CountryId;
    workspace.CompanyName = createWorkspaceDto.CompanyName;
    workspace.CompanyVat = createWorkspaceDto.CompanyVat;
    workspace.CompanyDataProtectionUrl = createWorkspaceDto.CompanyDataProtectionUrl;
    workspace.UploadLimit = createWorkspaceDto.UploadLimit;
    workspace.StripeSubscriptionId = createWorkspaceDto.StripeSubscriptionId;
    workspace.StripeSessionId = createWorkspaceDto.StripeSessionId;
    workspace.SubscriptionStatus = createWorkspaceDto.SubscriptionStatus;
    workspace.SubscriptionEndDate = createWorkspaceDto.SubscriptionEndDate;
    workspace.TrialStartOn = createWorkspaceDto.TrialStartOn;
    workspace.TrialEndsOn = createWorkspaceDto.TrialEndsOn;
    workspace.OwnerId = createWorkspaceDto.OwnerId;
    workspace.FileId = createWorkspaceDto.FileId;
    workspace.DefaultPrizeId = createWorkspaceDto.DefaultPrizeId;
    workspace.HasPassword = createWorkspaceDto.HasPassword;
    workspace.Password = createWorkspaceDto.Password;
    workspace.Slug = createWorkspaceDto.Slug;
    workspace.CreatedById = createWorkspaceDto.CreatedById;
    workspace.CreatedOn = createWorkspaceDto.CreatedOn;
    workspace.LastModifiedById = createWorkspaceDto.LastModifiedById;
    workspace.LastModifiedOn = createWorkspaceDto.LastModifiedOn;
    
    return await this.workspaceRepository.save(workspace);
  }

    // Alle Workspaces abrufen
    async findAll(): Promise<Workspace[]> {
    return await this.workspaceRepository.find();
  }

  // Einen Workspace anhand der ID abrufen
  async findOne(Id: number): Promise<Workspace> {
    const workspace = await this.workspaceRepository.findOne({ where: { Id } });
    if (!workspace) {
      throw new NotFoundException(`Workspace with id ${Id} not found`);
    }
    return workspace;
  }
}