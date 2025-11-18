import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuoteEntity } from './entity/quote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuoteRepository {
  constructor(
    @InjectRepository(QuoteEntity)
    private readonly typeOrmRepository: Repository<QuoteEntity>,
  ) {}

  async findAllQuotes(): Promise<QuoteEntity[]> {
    return this.typeOrmRepository.find();
  }
}
