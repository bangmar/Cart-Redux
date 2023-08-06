import { createSlice } from "@reduxjs/toolkit";

type TCartItem = {
	image: string;
	name: string;
	price: number;
	qty: number;
};

type TCartInitialState = {
	cart: Array<TCartItem>;
	isOpen: boolean;
};

const localCart = localStorage.getItem("cart");
const localCartData = JSON.parse(localCart ?? "[]");

const initialState: TCartInitialState = {
	cart: localCartData,
	isOpen: false,
};

const checkExsist = (state: Array<TCartItem>, key: string) => {
	const data = state.find((item) => {
		return item.name === key;
	});
	return data; // Return the found data
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addToCart: (state, action) => {
			const isExisted = checkExsist(state.cart, action.payload.name); // Use the function and get the found data
			isExisted
				? (isExisted.qty += 1)
				: (state.cart = [...state.cart, action.payload]);

			localStorage.setItem("cart", JSON.stringify(state.cart));
		},
		openCart: (state, action) => {
			state.isOpen = action.payload;
		},
		minQty: (state, action) => {
			const isExisted = checkExsist(state.cart, action.payload.name); // Use the function and get the found data

			if (isExisted && isExisted.qty > 1) {
				isExisted.qty--;
			} else {
				state.cart = state.cart.filter((item) => {
					return item.name !== action.payload.name;
				});
			}

			localStorage.setItem("cart", JSON.stringify(state.cart));
		},
	},
});

export const { addToCart, openCart, minQty } = cartSlice.actions;
export default cartSlice.reducer;
