/* The OrderRepository can be used for managing transactions or similar data entities. Adjust according to actual needs. */
import { Pool } from 'pg';
import { Order } from '../models/Order';
import { BaseRepository } from './BaseRepository';

export class OrderRepository extends BaseRepository<Order> {
  constructor(pool: Pool) {
    super(pool, 'orders');
  }
}
