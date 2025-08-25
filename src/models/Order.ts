import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    productId: number;

    @Column('decimal', { precision: 5, scale: 2 })
    amount: number;

    @CreateDateColumn()
    ordered_at: Date;
}