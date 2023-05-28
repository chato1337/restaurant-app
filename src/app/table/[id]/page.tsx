"use client";

import Footer from "@/components/footer";
import Menu from "@/components/menu";
import OrderDetail from "@/components/orderDetail";
import Product from "@/components/product";
import TableDetail from "@/components/tableDetail";
import { useTable } from "@/hooks/useTable";
import { useAppSelector } from "@/redux/hooks";
import { ProductService } from "@/services/product.service";
import { useEffect, useState } from "react";
import { Product as ProductModel } from "@/models/product.model";

export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;
	const [products, setProducts] = useState<ProductModel[]>([]);
	const { handleSubmit, tableNumber, tableSelected } = useTable(id);
	const order = useAppSelector((state) => state.OrderReducer.order);
	const joined: boolean = tableNumber > 0;

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await ProductService.getProducts();
			setProducts(data.results);
		};
		fetchProducts();
	}, []);

	return (
		<div className="max-w-380 mx-auto">
			{joined && <Menu />}
			{tableSelected && <TableDetail />}
			{!joined && (
				<>
					<form
						onSubmit={handleSubmit}
						className="flex flex-wrap items-center justify-center gap-4 py-2 px-4"
					>
						<input
							name="fullName"
							minLength={4}
							maxLength={20}
							type="text"
							required
							placeholder="Your name"
							className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
						/>
						<button
							type="submit"
							className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
						>
							Join and order
						</button>
					</form>
				</>
			)}
			{order && <OrderDetail />}
			<div className="grid grid-cols-2 gap-4">
				{!order &&
					joined &&
					products.map((product) => (
						<Product key={product.id} product={product} />
					))}
			</div>
			{!order && joined && <Footer />}
		</div>
	);
}
