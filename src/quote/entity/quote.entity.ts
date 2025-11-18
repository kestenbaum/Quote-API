import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuoteEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100, nullable: false })
  quote: string;

  @Column({ length: 20, nullable: false })
  author: string;
}
