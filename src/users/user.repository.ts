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

  getRandomUser(): User | undefined {
    if (this.users.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * this.users.length);
    return this.users[randomIndex];
  }
}
