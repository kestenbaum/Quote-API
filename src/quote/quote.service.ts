import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { Quote } from './interface/quote.interface';

@Injectable()
export class QuoteService {
  constructor(private readonly quoteRepository: QuoteRepository) {}
  getAllUsers(): Quote[] {
    return this.quoteRepository.getAllUsers();
  }
  getRandomUser() {
    return this.quoteRepository.getRandomUser();
  }
}
