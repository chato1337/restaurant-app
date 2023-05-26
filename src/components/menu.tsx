"use client"

import { useAppSelector } from "@/redux/hooks";

export default function Menu() {
    const table = useAppSelector(state => state.TableReducer.tableNumber)
    const products = useAppSelector(state => state.OrderReducer.products)
    const guest = useAppSelector(state => state.OrderReducer.guest)

	return (
		<div className="bg-gray-800 text-white">
			<div className="max-w-380 mx-auto flex justify-between items-center py-4">
				<div>
					<ul className="flex space-x-4">
						<li className="px-2 py-1">
							<a href="#" className="hover:text-gray-300">
								table #{table}
							</a>
						</li>
						<li className="px-2 py-1">
							<a href="#" className="hover:text-gray-300">
								Carrito de Compras ({products.length})
							</a>
						</li>
						<li className="px-2 py-1">
							<a href="#" className="hover:text-gray-300">
								{guest}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
