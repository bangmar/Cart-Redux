import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetailPage from "./pages/product-detail.tsx";

import { Provider } from "react-redux";
import store from "./redux/store.ts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/product-detail/:productId",
		element: <ProductDetailPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
