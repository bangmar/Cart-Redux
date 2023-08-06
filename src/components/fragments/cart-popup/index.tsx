import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addToCart, minQty } from "../../../redux/slice/cart";

const CartPopup: FC = (): ReactElement => {
	const isOpen = useSelector((state: RootState) => state.cart.isOpen);
	const cartItems = useSelector((state: RootState) => state.cart.cart);
	const dispatch = useDispatch();

	return (
		<section
			className={`${
				isOpen ? "top-20 " : "top-[100%]"
			} fixed px-8   left-0 w-full h-screen  transition-all duration-150 ease-in-out`}>
			<section className='w-full h-full  pb-48 overflow-auto opacity-90 bg-white backdrop-blur-lg'>
				{cartItems.map(({ image, name, price, qty }, index) => {
					return (
						<section
							key={index}
							className='flex gap-6 mb-10 items-center bg-neutral-50/50 px-2 py-6 rounded-sm shadow-md'>
							<aside>
								<figure className='h-24'>
									<img
										src={image}
										alt='dummy'
										className='h-full w-full object-cover'
									/>
								</figure>
							</aside>
							<main>
								<section>
									<h1 className='font-bold text-xl text-neutral-900 mb-1'>
										{name}
									</h1>
									<p className='text-base text-neutral-700'>
										Wallet with chain
									</p>
									<p className='text-sm text-neutral-500'>
										Style #36252 0YK0G 1000
									</p>
								</section>
								<h1 className='font-bold text-xl mb-4'>${price}</h1>
								<footer className='flex border-2 border-neutral-900 items-center w-fit gap-4'>
									<span
										className='block bg-slate-900 text-white px-4 py-1 cursor-pointer'
										onClick={() => {
											dispatch(minQty({ name }));
										}}>
										-
									</span>
									<span className='block '>{qty}</span>
									<span
										className='block bg-slate-900 text-white px-4 py-1 cursor-pointer'
										onClick={() => {
											dispatch(addToCart({ name, price, qty }));
										}}>
										+
									</span>
								</footer>
							</main>
						</section>
					);
				})}
				<section>
					Total :{" "}
					<span className='font-bold'>
						$
						{cartItems.reduce(
							(total, item) => total + item.price * item.qty,
							0
						)}
					</span>
				</section>
			</section>
		</section>
	);
};

export default CartPopup;
