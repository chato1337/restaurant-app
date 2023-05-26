import { OrderDTO } from "@/models/order.model"
import { createDocument, getCollection, getDocument, getDocumentById, NameType } from "@/utils/appwrite"

export class OrderService {
    static getOrders = async () => {
        return await getCollection(NameType.Order)
    }
    static createOrder = async (data: OrderDTO) => {
        return await createDocument(NameType.Order, data)
    }
    static getOrder = async (id: string) => {
        return await getDocumentById(id, NameType.Order)
    }
}