"use client"

import { FlatOrder, Order } from "@/models/order.model";
import { OrderService } from "@/services/order.service";
import { ProductService } from "@/services/product.service";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;
    const [order, setOrder] = useState<FlatOrder | null>(null)
    const route = useRouter()

	const fetchOrder = useCallback(async () => {
		const res = await OrderService.getOrder(id);
		setOrder(res as any);
	}, [id]);

    useEffect(() => {
        fetchOrder()
    }, [fetchOrder])

	return (
		<div className="bg-white rounded-lg shadow-lg p-6">
            <button onClick={() => route.back()} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">back</button>
			<h2 className="text-2xl font-bold mb-4">Order {id}</h2>
			<div className="mb-4">
				<p className="font-semibold">
					Propietario: <span className="font-normal">{order?.owner}</span>
				</p>
			</div>
			<table className="min-w-full">
				<thead>
					<tr>
						<th className="py-2 px-4 border">Producto</th>
						<th className="py-2 px-4 border">Precio</th>
					</tr>
				</thead>
				<tbody>
                    {
                        order?.products.map(id => {
                            const product = ProductService.getProducts()
                                .find(el => el.id === id)
                            return (
                                <tr key={id}>
                                    <td className="py-2 px-4 border">{product?.name}</td>
                                    <td className="py-2 px-4 border">{product?.price}</td>
                                </tr>
                            )
                        })
                    }
				</tbody>
			</table>
			<div className="mt-4">
				<p className="font-semibold">
					Propinas: <span className="font-normal">$ {order?.tips}</span>
				</p>
				<p className="font-semibold">
					Total a pagar: <span className="font-normal">$ {order?.subtotal}</span>
				</p>
			</div>
		</div>
	);
}
