import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-blue-400">
			<h1 className="text-4xl font-bold mb-8">Restaurant app</h1>
			<div className="flex gap-4">
				<Link href={`waiter`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
					Waiters view
				</Link>
				<Link href={`table`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
					Customers view
				</Link>
			</div>
		</div>
	);
}
