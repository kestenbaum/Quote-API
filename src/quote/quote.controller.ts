import { Controller, Delete, Get, Param, Post, Body } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { QuoteEntity } from './entity/quote.entity';
import { createQuoteDto } from './dto/create-quote.dto';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  async getAll(): Promise<QuoteEntity[]> {
    return this.quoteService.getAllQuotes();
  }

  @Get(':id')
  async getOneById(@Param('id') id: string): Promise<QuoteEntity | null> {
    return this.quoteService.getOneById(id);
  }

  @Post()
  async create(@Body() quoteDto: createQuoteDto): Promise<QuoteEntity> {
    return this.quoteService.create(quoteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.quoteService.delete(id);
  }
}
