import { Table } from "@/models/table.model";

export default function TableCard({ table }: { table: Table }) {
	return (
		<div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg p-6">
			<h3 className="text-lg font-semibold mb-2">Mesa {table.number}</h3>
			<p className="text-gray-500 mb-2">Clientes: {table.customers}</p>
			<p className="text-gray-500 mb-2">
				Órdenes: {table.orders.length}
				<p className="text-gray-500 mb-2">Total: {table.total} $</p>
			</p>
			<div className="overflow-y-auto max-h-40">
				<table className="w-full">
					<thead className="bg-gray-200">
						<tr>
							<th className="py-2 px-4">order</th>
							<th className="py-2 px-4">detail</th>
						</tr>
					</thead>
					<tbody>
						{table.orders.map((el) => (
							<tr key={el}>
								<td className="py-2 px-4">{el}</td>
								<td className="py-2 px-4">
									<a href="#">view</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
				close table
			</button>
		</div>
	);
}
