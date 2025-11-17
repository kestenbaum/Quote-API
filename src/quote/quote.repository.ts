import { Injectable } from '@nestjs/common';
import { getQuoteData } from './data/quote.data';
import { Quote } from './interface/quote.interface';

@Injectable()
export class QuoteRepository {
  private quotes: Quote[] = [];

  constructor() {
    this.quotes = getQuoteData();
  }

  getAllUsers(): Quote[] {
    return [...this.quotes];
  }

  getRandomUser(): Quote | undefined {
    if (this.quotes.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
