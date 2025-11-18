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

  async findOneById(id: string): Promise<QuoteEntity | null> {
    return this.typeOrmRepository.findOne({ where: { id } });
  }

  async create(quote: Partial<QuoteEntity>): Promise<QuoteEntity> {
    const newQuote = this.typeOrmRepository.create(quote);
    return this.typeOrmRepository.save(newQuote);
  }

  async delete(id: string): Promise<void> {
    await this.typeOrmRepository.delete(id);
  }
}
