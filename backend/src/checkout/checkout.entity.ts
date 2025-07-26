import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Checkout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column('decimal')
  price: number;

  @Column()
  quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
