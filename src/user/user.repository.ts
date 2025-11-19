import { User } from './entity/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly typeOrmRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.typeOrmRepository.find();
  }

  async findById(id: string): Promise<User | null> {
    return this.typeOrmRepository.findOneBy({ id });
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.typeOrmRepository.create(userData);
    return this.typeOrmRepository.save(user);
  }

  async update(id: string, updateUser: Partial<User>): Promise<User | null> {
    const existingUser = await this.typeOrmRepository.findOne({
      where: { id: id },
    });

    if (!existingUser) {
      return null;
    }

    Object.assign(existingUser, updateUser);

    return this.typeOrmRepository.save(existingUser);
  }

  async delete(id: string): Promise<void> {
    await this.typeOrmRepository.delete(id);
  }
}
