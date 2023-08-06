import { createSlice, configureStore } from "@reduxjs/toolkit";

type TCartItem = {
	qty: number;
};

type TInitialState = {
	cart: Array<TCartItem>;
};

const initialState: TInitialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addToCart(state, action) {
			state.cart = [...state.cart, action.payload];
		},
	},
});

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

store.dispatch(cartSlice.actions.addToCart({ qyt: 1 }));
