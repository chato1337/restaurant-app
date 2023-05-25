import { Order } from './order.model.d';

export interface Table {
    id: string
    number: number;
    orders: string[];
    customers: number;
    total: number;
    isActive: boolean
}

export interface TableDTO extends Omit<Table, 'isActive' | 'orders' | 'id'> {
    orders: string[]
}
