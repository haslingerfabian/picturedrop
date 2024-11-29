/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/userCreate.dto';
import { UpdateUserDto } from '../dto/userUpdate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // User erstellen
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.Username = createUserDto.Username;
    user.FirstName = createUserDto.Firstname;
    user.LastName = createUserDto.Lastname;
    user.Email = createUserDto.Email;
    user.StripeCustomerId = createUserDto.StripeCustomerId;
    
    return await this.userRepository.save(user);
  }

  // Alle User abrufen
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Einen User anhand der ID abrufen
  async findOne(Id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException(`User with id ${Id} not found`);
    }
    return user;
  }

  // User aktualisieren
  async update(Id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { Id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.update({ Id }, updateUserDto);
    return { ...user, ...updateUserDto }; // Rückgabe des aktualisierten Users
  }
}