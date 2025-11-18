import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialQuoteSchema1763474315636 implements MigrationInterface {
  name = 'InitialQuoteSchema1763474315636';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "quote_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quote" varchar(100) NOT NULL, "author" varchar(20) NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "quote_entity"`);
  }
}
