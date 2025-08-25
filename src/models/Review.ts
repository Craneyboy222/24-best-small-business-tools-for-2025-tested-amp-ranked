import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column('text')
    comment: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(type => User, user => user.reviews)
    user: User;

    @ManyToOne(type => Product, product => product.reviews)
    product: Product;
}