import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  getAllUsers(): User[] {
    return this.userRepository.getAllUsers();
  }
}
