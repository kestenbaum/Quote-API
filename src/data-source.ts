import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as path from 'path';

const rootDir = path.resolve(__dirname, '..');

export default new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',

  entities: [path.join(rootDir, 'src/quote/entity/*.entity{.ts,.js}')],

  migrations: [path.join(rootDir, 'src/quote/database/migrations/*.{ts,.js}')],

  synchronize: false,
  logging: true,
});
