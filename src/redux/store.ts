import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from './slices/OrderSlice'
import TableReducer from './slices/TableSlice'

export const store = configureStore({
	reducer: {
        OrderReducer,
        TableReducer
    },
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
