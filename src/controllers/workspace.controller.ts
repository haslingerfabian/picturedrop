/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { WorkspaceService } from '../services/workspaces.service';
import { CreateWorkspaceDto } from '../dto/workspaceCreate.dto';
import { UpdateWorkspaceDto } from '../dto/workspaceUpdate.dto';
import { Workspace } from '../entities/workspaces.entity';

@Controller('Workspaces')
export class WorkspacesController{
    constructor(private readonly workspaceService: WorkspaceService) {}

    @Post()
    async create(@Body() createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
      return this.workspaceService.create(createWorkspaceDto);
    }

    // Alle Workspaces abrufen
    @Get()
    async findAll(): Promise<Workspace[]> {
        return this.workspaceService.findAll();
    }

    // Einen Workspace anhand der ID abrufen
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Workspace> {
        return this.workspaceService.findOne(id);
    }

    // Einen Workspace anhand der ID aktualisieren
    @Put(':id')
    async update(@Param('id') id: number, @Body() updateworkspaceDto: UpdateWorkspaceDto): Promise<Workspace> {
        return this.workspaceService.update(id, updateworkspaceDto);
    }

}