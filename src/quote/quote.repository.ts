import { Injectable } from '@nestjs/common';
import { getQuoteData } from './data/quote.data';
import { Quote } from './interface/quote.interface';

@Injectable()
export class QuoteRepository {
  private quotes: Quote[] = [];

  constructor() {
    this.quotes = getQuoteData();
  }

  getAllQuotes(): Quote[] {
    return [...this.quotes];
  }

  getRandomQuote(): Quote | undefined {
    if (this.quotes.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
