import { OrderDTO } from "@/models/order.model"
import { createDocument, getCollection, getDocument, getDocumentById } from "@/utils/appwrite"

export class OrderService {
    static getOrders = async () => {
        return await getCollection('order')
    }
    static createOrder = async (data: OrderDTO) => {
        return await createDocument('order', data)
    }
    static getOrder = async (id: string) => {
        return await getDocumentById(id, 'order')
    }
}