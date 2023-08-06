import { createStore } from "redux";

type TCartState = {
	cart: {
		id: string;
		name: string;
		qty: number;
	}[];
};

type TAddCartAction = {
	type: "ADD_TO_CART";
	payload: {
		id: string;
		name: string;
		qty: number;
	};
};

type TCartActionTypes = TAddCartAction;

const cartReducer = (
	state: TCartState = {
		cart: [],
	},
	action: TCartActionTypes
) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return { ...state, cart: [...state.cart, action.payload] };
	}
};

const store = createStore(cartReducer);

console.log("store : ", store.getState());
