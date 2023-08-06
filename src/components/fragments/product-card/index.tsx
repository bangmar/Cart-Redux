import { FC, ReactElement, ReactNode, Fragment } from "react";

import { Link } from "react-router-dom";
import LikeButton from "../../elements/like-button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slice/cart";

type TProductCardProps = {
	children?: ReactNode;
	href?: string;
	classname?: string;
	isLiked: boolean;
};

const ProductCard: FC<TProductCardProps> & {
	Main: typeof Main;
} = ({ children, classname, isLiked }): ReactElement => {
	return (
		<section
			className={`${classname} w-full px-4 py-3 bg-neutral-100 rounded-md min-h-[240px] `}>
			<header className='mb-2 w-full flex justify-end'>
				<LikeButton isLiked={isLiked} />
			</header>
			{children}
		</section>
	);
};

export default ProductCard;

type TMainProps = {
	image: string;
	name: string;
	href: string;
	price: number;
};
const Main: FC<TMainProps> = ({ name, image, href, price }) => {
	const dispatch = useDispatch();
	const qty: number = 1;

	return (
		<Fragment>
			<main className='mb-2'>
				<Link to={`/product-detail/${href as string}`} role='button'>
					<figure className='w-full h-full grid place-items-center'>
						<img src={image} alt={name} className='w-full h-28 mb-2' />
						<h1 className='font-bold text-lg'>{name}</h1>
					</figure>
				</Link>
			</main>
			<footer className='w-full grid place-items-center'>
				<button
					className='pb-2 underline underline-offset-4'
					type='button'
					onClick={() => {
						dispatch(addToCart({ name, image, price, qty }));
					}}>
					<h1 className='hover:text-sky-800 font-sans font-medium text-sm'>
						ADD CART
					</h1>
				</button>
			</footer>
		</Fragment>
	);
};

ProductCard.Main = Main;
