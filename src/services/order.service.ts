import { SETTINGS } from "@/config/config"
import { Order, OrderDTO } from "@/models/order.model"
import axios, { AxiosResponse } from "axios"

const PATH = 'orders/'
export class OrderService {
    static getOrders = async () => {
        const res = await axios.get(SETTINGS.api + PATH)
        return res.data
    }
    static createOrder = async (data: OrderDTO) => {
        const res: AxiosResponse<Order> = await axios.post(SETTINGS.api + PATH, data)
        return res.data
    }
    static getOrder = async (id: string) => {
        const res: AxiosResponse<Order[]> = await axios.get(`${SETTINGS.api}${PATH}?id=${id}`)
        return res.data
    }
}