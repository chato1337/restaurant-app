"use client"

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const input = event.currentTarget.elements.namedItem("tablenum") as HTMLInputElement
        if (input) {
            const value = input.value
            router.push(`table/${value}`)
        }

    }

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-blue-500">
			<h1 className="text-4xl text-white font-bold mb-4">Restaurant App</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <input
                        type="number"
                        className="rounded-l-lg py-2 px-4 bg-white text-gray-800 focus:outline-none"
                        placeholder="Select a Table"
                        name="tablenum"
                    />
                    <button type="submit" className="bg-white text-blue-500 py-2 px-4 rounded-r-lg ml-2">
                        Go now
                    </button>
                </div>
            </form>
			<button className="bg-white text-blue-500 py-2 px-4 rounded-lg">
				or scan QR
			</button>
		</div>
	);
}
