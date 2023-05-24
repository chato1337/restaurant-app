import { Product } from "@/models/product.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

// Define a type for the slice state
export interface OrderState {
	guest: string | null
	guests: string[]
	table: number
    products: Product[];
    yourTotal: number;
    totalTable: number;
    tips: number
}

// Define the initial state using that type
const initialState: OrderState = {
	guests: [],
	table: 0,
    products: [],
    yourTotal: 0,
    totalTable: 0,
    tips: 0,
	guest: null
};

export const orderSlice = createSlice({
	name: "order",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.yourTotal += action.payload;
		},
		setTable: (state, action: PayloadAction<number>) => {
			state.table = action.payload
		},
		setGuest: (state, action: PayloadAction<string>) => {
			state.guest = action.payload
		},
		setProducts: (state, action: PayloadAction<Product[]>) =>  {
			state.products = action.payload
		},
		addProduct: (state, action: PayloadAction<Product>) =>  {
			state.products = [...state.products, action.payload]
		},

	},
});

export const { incrementByAmount, setTable, setGuest, setProducts, addProduct } = orderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.order.yourTotal;

export default orderSlice.reducer;
