import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { Quote } from './interface/quote.interface';
@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {}
  async getAllQuotes(): Promise<Quote[]> {
    return this.quoteRepository.findAllQuotes();
  }
}
