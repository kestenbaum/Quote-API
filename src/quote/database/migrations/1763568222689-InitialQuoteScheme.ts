import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialQuoteScheme1763568222689 implements MigrationInterface {
  name = 'InitialQuoteScheme1763568222689';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(50) NOT NULL, "email" varchar(100) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "quote_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quote" varchar(100) NOT NULL, "author" varchar(20) NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "quote_entity"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
