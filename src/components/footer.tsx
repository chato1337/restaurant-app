"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { incrementByAmount } from "@/redux/slices/OrderSlice";
import { FormEvent } from "react";


export default function Footer() {
    const dispatch = useAppDispatch()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const input = event.target as any
        const tips = input[0].value
        if(typeof tips === "string" && total > 0) {
            const value = tips.length > 0 ? Number(tips) : 0
            dispatch(incrementByAmount(value + total))
            alert(`your order for ${value + total} has been submited`)
        } else {
            alert(`select products first!`)
        }
    }
    const products = useAppSelector(state => state.OrderReducer.products)
    const total = products.reduce((prev, curr) => prev + curr.price, 0);

	return (
		<footer className="bg-gray-800 text-white fixed bottom-0 left-0 w-full">
			<div >
                <form onSubmit={handleSubmit} className="max-w-380 mx-auto py-4 flex justify-between items-center">
                    <div>
                        <h4 className="text-lg font-bold">Total a Pagar: {total} $</h4>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">+ Propinas (opcional)</h4>
                    </div>
                    <div>
                        <input
                            type="number"
                            className="w-32 px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 text-black"
                            placeholder="tips"
                            name="tips"
                        />
                    </div>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Ordenar
                    </button>
                </form>
			</div>
		</footer>
	);
}
