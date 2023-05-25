"use client"

import Footer from "@/components/footer";
import Menu from "@/components/menu";
import OrderDetail from "@/components/orderDetail";
import Product from "@/components/product";
import TableDetail from "@/components/tableDetail";
import { Table, TableDTO } from "@/models/table.model";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setGuest, setTable } from "@/redux/slices/OrderSlice";
import { setTableSelected } from "@/redux/slices/TableSlice";
import { ProductService } from "@/services/product.service";
import { TableService } from "@/services/table.service";
import { FormEvent, useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const products = ProductService.getProducts()
    const table = useAppSelector(state => state.OrderReducer.table)
    const tableSelected = useAppSelector(state => state.TableReducer.tableSelected)
    const order = useAppSelector(state => state.OrderReducer.order)
    const dispatch = useAppDispatch()
    const joined: boolean = table > 0
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const input = event.target as any
        const name = input[0].value

        if (typeof name === "string" && name.length >= 3) {
            dispatch(setTable(Number(id)))
            dispatch(setGuest(name))
        }
    }

    const fetchTable = async () => {
        const res = await TableService.getTable(Number(id))
        
        //if table dooes not exits
        if (res.documents.length === 0) {
            //create table in state
            const newTable: TableDTO = {
                number: Number(id),
                orders: [],
                customers: 0,
                total: 0
            }
            const createdTable = await TableService.createTable(newTable)
            dispatch(setTableSelected({...newTable, isActive: true, orders: [], id: createdTable.$id}))
        }

        //if table exist
        if (res.documents.length > 0) {
            const table = res.documents[0] as any
            dispatch(setTableSelected({...table, id: res.documents[0].$id}))
        }
    }

    useEffect(() => {
        fetchTable()
    }, [])

    return (
        <div className="max-w-380 mx-auto">
            {
                joined && <Menu />
            }
            {
                tableSelected && <TableDetail />
            }
            {
                !joined && (
                    <>
                        <h1>Welcome to table #{id}</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="fullName"
                                minLength={4}
                                maxLength={20}
                                type="text"
                                required
                                placeholder="your name"
                                className="w-full px-4 py-2 mt-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            />
                            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Join and order</button>
                        </form>
                    </>
                )
            }
            {
                order && <OrderDetail />
            }
            <div className="grid grid-cols-2 gap-4">
                {
                    !order && joined && products.map(product => <Product key={product.id} product={product}/>)
                }
            </div>
            {
                !order && joined && <Footer />
            }
        </div>
    );
}