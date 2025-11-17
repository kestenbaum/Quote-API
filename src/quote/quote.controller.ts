import { Controller, Get } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Quote } from './interface/quote.interface';

@Controller('user')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  getAll(): Quote[] {
    return this.quoteService.getAllUsers();
  }
}
