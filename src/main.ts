import { NestFactory } from '@nestjs/core';
import { QuoteModule } from './quote/quote.module';

async function bootstrap() {
  const app = await NestFactory.create(QuoteModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
