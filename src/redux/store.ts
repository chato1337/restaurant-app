import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from './slices/OrderSlice'

export const store = configureStore({
	reducer: {
        OrderReducer
    },
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
