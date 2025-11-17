import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { Quote } from './interface/quote.interface';

@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {}
  getAllQuotes(): Quote[] {
    return this.quoteRepository.getAllQuotes();
  }
  getRandomQuote() {
    return this.quoteRepository.getRandomQuote();
  }
}
