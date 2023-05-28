"use Client";

import { useAppSelector } from "@/redux/hooks";

export default function TableDetail() {
	const currentTable = useAppSelector(
		(state) => state.TableReducer.tableSelected
	);
	return (
		<div className="max-w-380 mx-auto bg-gray-800 text-white shadow-lg p-6">
			<h2 className="text-2xl font-bold mb-4">Table Details</h2>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<h4 className="text-lg font-semibold">Table Number:</h4>
					<span className="text-gray-300">Table {currentTable?.number}</span>
				</div>
				<div>
					<h4 className="text-lg font-semibold">Number of Orders:</h4>
					<span className="text-gray-300">{currentTable?.orders?.length} orders</span>
				</div>
				<div>
					<h4 className="text-lg font-semibold">Number of Guests:</h4>
					<span className="text-gray-300">{currentTable?.customers} guests</span>
				</div>
				<div>
					<h4 className="text-lg font-semibold">Total Amount:</h4>
					<span className="text-gray-300">$ {currentTable?.total}</span>
				</div>
			</div>
		</div>
	);
}
