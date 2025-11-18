import { Module } from '@nestjs/common';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { QuoteRepository } from './quote.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteEntity } from './entity/quote.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [QuoteEntity],
      synchronize: false,
      logging: false,
    }),
    TypeOrmModule.forFeature([QuoteEntity]),
  ],
  controllers: [QuoteController],
  providers: [QuoteService, QuoteRepository],
})
export class QuoteModule {}
