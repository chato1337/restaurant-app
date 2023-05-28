import { Product } from "@/models/product.model";
import data from "@/mocks/products.json"
import axios, { AxiosResponse } from 'axios';
import { SETTINGS } from "@/config/config";
import { Pagination } from "@/models/shared";

const PATH = 'products/'

export class ProductService {
    static getProducts = async () => {
        const res: AxiosResponse<Pagination<Product[]>> = await axios.get(SETTINGS.api + PATH)
        return res.data
    }
}