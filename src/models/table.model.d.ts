import { Order } from './order.model.d';

export interface Table {
    id: number;
    orders: Order[];
    customers: number;
    total: number;
}