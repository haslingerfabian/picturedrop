/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UsersService } from '../services/user.service';
import { CreateUserDto } from '../dto/userCreate.dto';
import { UpdateUserDto } from '../dto/userUpdate.dto';
import { User } from '../entities/user.entity';

@Controller('users') // Der Controller ist unter der Route '/users' erreichbar
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Einen neuen User erstellen
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  // Alle User abrufen
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // Einen User anhand der ID abrufen
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  // Einen User anhand der ID aktualisieren
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }
}