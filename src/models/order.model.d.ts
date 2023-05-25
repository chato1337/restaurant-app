import { Product } from "./product.model";

export interface Order {
    id: string
    products: Product[];
    owner: string;
    tips: number
    subtotal: number;
}

export interface OrderDTO extends Omit<Order, 'products' | 'id'> {
    products: number[]
}

export interface FlatOrder extends Omit<Order, 'products'> {
    products: number[]
}