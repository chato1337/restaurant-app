import { OrderDTO } from "@/models/order.model"
import { TableDTO } from "@/models/table.model"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { incrementByAmount, setOrder, setTips } from "@/redux/slices/OrderSlice"
import { setTableSelected } from "@/redux/slices/TableSlice"
import { OrderService } from "@/services/order.service"
import { TableService } from "@/services/table.service"
import { FormEvent } from "react"


export const useOrder = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.OrderReducer.products)
    const guest = useAppSelector(state => state.OrderReducer.guest)
    const total = products.reduce((prev, curr) => prev + curr.price, 0);
    const currentTable = useAppSelector(state => state.TableReducer.tableSelected)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const input = event.currentTarget.elements.namedItem("tips") as HTMLInputElement

        if(input && total > 0 && guest && currentTable) {
            const value = Number(input.value)
            dispatch(setTips(value))
            dispatch(incrementByAmount(value + total))
            const order: OrderDTO = {
                products: products.map(el => el.id),
                owner: guest,
                tips: value,
                subtotal: value + total
            }
            const createdOrder = await OrderService.createOrder(order)
            dispatch(setOrder(createdOrder))
            const table: TableDTO & { orders: number[] } = {
                number: currentTable.number,
                customers: currentTable.customers + 1,
                orders: [ ...currentTable.orders.map(el => el.id), createdOrder.id ],
                total: currentTable.total + order.subtotal
            }
            const updatedTable = await TableService.updateTable(currentTable.id, table)
            dispatch(setTableSelected(updatedTable))
        } else {
            alert(`select products first!`)
        }
    }

    return {
        handleSubmit,
        total
    }

}