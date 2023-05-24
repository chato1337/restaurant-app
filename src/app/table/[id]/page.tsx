"use client"

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
                !joined && (
                    <>
                        <h1>Welcome to table #{id}</h1>
                        <form onSubmit={handleSubmit}>
                            <input name="fullName" minLength={4} maxLength={20} type="text" required className="w-full px-4 py-2 mt-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500" />
                            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Join and order</button>
                        </form>
                    </>
                )
            }
            <div className="grid grid-cols-2 gap-4">
                {
                    joined && products.map(product => (
                        <div className="border p-4 flex flex-col items-center bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-gray-800">
                                { product.name }
                            </h3>
                            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-full" />
                            <p className="text-gray-600 mb-2">$29.99</p>
                            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
                            <p className="text-sm text-gray-700 mb-4">{product.category}</p>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Ordenar
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}