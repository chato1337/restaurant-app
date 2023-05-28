"use client"

import { Product } from "@/models/product.model";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProduct, setProducts } from "@/redux/slices/OrderSlice";
import { useState } from "react";
import Image from 'next/image';

export default function Product({ product }: { product: Product }) {
    const dispatch = useAppDispatch()
    const [currentProduct, setCurrentProduct] = useState<null | Product>(null)
    const products = useAppSelector(state => state.OrderReducer.products)
    const handleOrder = () => {
        const exist = products.some(prod => prod.id === product.id)
        if (!exist) {
            dispatch(addProduct(product))
            setCurrentProduct(product)
        } else {
            const removeProduct = products.filter(el => el.id !== product.id)
            setCurrentProduct(null)
            dispatch(setProducts(removeProduct))
        }
    }

    return (
        <div className="border p-4 flex flex-col items-center bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">
                { product.name }
            </h3>
            <Image
                src={product.image}
                alt={product.name}
                width={45}
                height={45}
                className="w-32 h-32 object-cover mb-4 rounded-full"
            />
            <p className="text-gray-600 mb-2">{product.price} $</p>
            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
            <p className="text-sm text-gray-700 mb-4">{product.category}</p>
            <button onClick={handleOrder} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                { currentProduct ? 'Remove' : 'Add' }
            </button>
        </div>
    )
}