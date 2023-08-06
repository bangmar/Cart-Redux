import { FC, ReactElement } from "react";
import { MdHomeFilled, MdSearch, MdShoppingCart } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../../redux/slice/cart";
import { RootState } from "../../../redux/store";

const MobileTaskbar: FC = (): ReactElement => {
	const isOpen = useSelector((state: RootState) => state.cart.isOpen);

	const dipatch = useDispatch();

	return (
		<footer className='fixed bottom-8 mx-8 left-0 z-20 right-0 bg-neutral-50 px-10 py-4 rounded-full shadow-md text-2xl'>
			<div className='flex justify-between'>
				<Link to={"/"}>
					<MdHomeFilled />
				</Link>
				<MdSearch />
				<IoHeart />
				<section
					onClick={() => {
						dipatch(openCart(!isOpen));
					}}>
					<MdShoppingCart />
				</section>
			</div>
		</footer>
	);
};

export default MobileTaskbar;
