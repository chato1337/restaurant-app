"use client"

import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Product from "@/components/product";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setGuest, setTable } from "@/redux/slices/OrderSlice";
import { ProductService } from "@/services/product.service";
import { FormEvent } from "react";

export default function Page({ params }: { params: { id: number } }) {
    const { id } = params
    const products = ProductService.getProducts()
    const table = useAppSelector(state => state.OrderReducer.table)
    const dispatch = useAppDispatch()
    const joined: boolean = table > 0
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const input = event.target as any
        const name = input[0].value

        if (typeof name === "string" && name.length >= 3) {
            dispatch(setTable(id))
            dispatch(setGuest(name))
        }
    }

    return (
        <div className="max-w-380 mx-auto">
            {
                joined && <Menu />
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
            <div className="grid grid-cols-2 gap-4">
                {
                    joined && products.map(product => <Product key={product.id} product={product}/>)
                }
            </div>
            {
                joined && <Footer />
            }
        </div>
    );
}