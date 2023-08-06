import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cart";

export type RootState = {
	cart: ReturnType<typeof cartReducer>;
};

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default store;
