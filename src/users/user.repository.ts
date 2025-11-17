import { Injectable } from '@nestjs/common';
import { getUsersData } from './data/user.data';
import { User } from './interface/user.interface';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor() {
    this.users = getUsersData();
  }

  getAllUsers(): User[] {
    return [...this.users];
  }
}
