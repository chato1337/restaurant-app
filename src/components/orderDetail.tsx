"use Client";

import { useAppSelector } from "@/redux/hooks";

export default function OrderDetail() {
    const order = useAppSelector(state => state.OrderReducer.order)
	return (
        <div className="table-container">
            <h2 className="text-2xl font-bold mb-4">Your order {order?.id} was sended!</h2>
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="py-2 px-4">Producto</th>
                        <th className="py-2 px-4">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order?.products.map(el => (
                            <tr key={el.id}>
                                <td className="py-2 px-4  border">{el.name}</td>
                                <td className="py-2 px-4  border">${el.price}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td className="py-2 px-4 border">propinas</td>
                        <td className="py-2 px-4 border">{order?.tips}$</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border">total</td>
                        <td className="py-2 px-4 border">{order?.subtotal}$</td>
                    </tr>
                </tbody>
            </table>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Edit my order</button>
        </div>
	);
}
