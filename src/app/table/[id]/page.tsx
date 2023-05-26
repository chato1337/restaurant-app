"use client"

import Footer from "@/components/footer";
import Menu from "@/components/menu";
import OrderDetail from "@/components/orderDetail";
import Product from "@/components/product";
import TableDetail from "@/components/tableDetail";
import { useTable } from "@/hooks/useTable";
import { useAppSelector } from "@/redux/hooks";
import { ProductService } from "@/services/product.service";

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const products = ProductService.getProducts()
    const { handleSubmit, tableNumber, tableSelected } = useTable(id)
    const order = useAppSelector(state => state.OrderReducer.order)
    const joined: boolean = tableNumber > 0


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