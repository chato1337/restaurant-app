import { Order } from './order.model.d';

export interface Table {
    id: number
    number: number;
    orders: Order[];
    customers: number;
    total: number;
    isActive: boolean
}

export interface TableDTO extends Omit<Table, 'isActive' | 'orders' | 'id'> { }
