import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDto } from './dto/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<UserDto[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async createUser(userData: Omit<UserDto, 'id'>) {
    return this.userRepository.create({ id: uuidv4(), ...userData });
  }

  async updateUser(id: string, updateData: UserDto): Promise<User | null> {
    return this.userRepository.update(id, updateData);
  }

  async deleteUser(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
