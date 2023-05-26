"use client"

import { useOrder } from "@/hooks/useOrder";


export default function Footer() {
    const { handleSubmit, total } = useOrder()

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
