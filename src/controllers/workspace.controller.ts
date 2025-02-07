/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { WorkspaceService } from '../services/workspaces.service';
import { CreateWorkspaceDto } from '../dto/workspaceCreate.dto';
import { UpdateWorkspaceDto } from '../dto/workspaceUpdate.dto';
import { Workspace } from '../entities/workspaces.entity';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Workspaces')
@Controller('Workspaces')
export class WorkspacesController{
    constructor(private readonly workspaceService: WorkspaceService) {}


    // Alle Workspaces abrufen
    @ApiOperation({
        operationId: 'getAllWorkspaces',
        summary: 'Get all workspaces'
    })
    @Get()
    async findAll(): Promise<Workspace[]> {
        return this.workspaceService.findAll();
    }

    // Einen Workspace anhand der ID abrufen
    @ApiOperation({
        operationId: 'getWorkspaceById',
        summary: 'Get workspace by id'
    })
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Workspace> {
        return this.workspaceService.findOne(id);
    }

}