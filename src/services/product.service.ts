import { Product } from "@/models/product.model";
import data from "@/mocks/products.json"

export class ProductService {
    static getProducts(): Product[] {
        return data.products
    }
}