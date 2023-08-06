import { createReducer, createAction, configureStore } from "@reduxjs/toolkit";

type TCartState = {
	id: number;
	qty: number;
};

type TInitialState = {
	cart: Array<TCartState>;
};

const initialState: TInitialState = {
	cart: [],
};

const addToCart = createAction<TCartState>("ADD_TO_CART");

const cartReducer = createReducer(initialState, (builder) => {
	builder.addCase(addToCart, (state, action) => {
		state.cart = [...state.cart, action.payload];
	});
});

const store = configureStore({
	reducer: {
		cartReducer,
	},
});

store.dispatch(addToCart({ id: 1, qty: 2 }));
