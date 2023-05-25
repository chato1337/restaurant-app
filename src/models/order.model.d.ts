import { Product } from "./product.model";

export interface Order {
    products: Product[];
    owner: string;
    tips: number
    subtotal: number;
}