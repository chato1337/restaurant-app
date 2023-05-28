"use client";

import { useTable } from "@/hooks/useTable";
import Link from "next/link";

export default function Page() {
	const { tables } = useTable();
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">Your active tables</h2>
			<div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{
					tables.map((table) => (
						<div key={table.id} className="max-w-xs mx-auto bg-white rounded-lg shadow-lg p-6">
							<h3 className="text-lg font-semibold mb-2">
								Table {table.number}
							</h3>
							<p className="text-gray-500 mb-2">Customers: {table.customers}</p>
							<p className="text-gray-500 mb-2">
								Orders: {table.orders.length}
							</p>
							<p className="text-gray-500 mb-2">Total: {table.total} $</p>
							<div className="overflow-y-auto max-h-40">
								<table className="w-full">
									<thead className="bg-gray-200">
										<tr>
											<th className="py-2 px-4">Order</th>
											<th className="py-2 px-4">Detail</th>
										</tr>
									</thead>
									<tbody>
                                        {
                                            table.orders.map(el => (
                                                <tr key={el.id}>
                                                    <td className="py-2 px-4">{el.owner}</td>
                                                    <td className="py-2 px-4">
                                                        <Link href={`waiter/${el.id}`}>View</Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
									</tbody>
								</table>
							</div>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Close table
                            </button>
						</div>
					))}
			</div>
		</div>
	);
}
