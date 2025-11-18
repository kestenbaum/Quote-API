import { Controller, Get } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Quote } from './interface/quote.interface';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  async getAll(): Promise<Quote[]> {
    return this.quoteService.getAllQuotes();
  }
}
