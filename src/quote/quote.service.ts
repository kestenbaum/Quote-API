import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { QuoteEntity } from './entity/quote.entity';
@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {}
  async getAllQuotes(): Promise<QuoteEntity[]> {
    return this.quoteRepository.findAllQuotes();
  }

  async getOneById(id: string): Promise<QuoteEntity | null> {
    return this.quoteRepository.findOneById(id);
  }

  async create(quote: Partial<QuoteEntity>): Promise<QuoteEntity> {
    return this.quoteRepository.create(quote);
  }

  async delete(id: string): Promise<void> {
    return this.quoteRepository.delete(id);
  }
}
