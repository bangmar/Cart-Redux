import { FC, ReactElement } from "react";
import Button from "../../elements/button";
import LikeButton from "../../elements/like-button";

const ProductDetailHeader: FC = (): ReactElement => {
	return (
		<section>
			<header className='mb-2 w-full flex justify-end'>
				<LikeButton isLiked={false} />
			</header>
			<main className='mb-2'>
				<h1 className='font-bold text-2xl text-neutral-900 mb-1'>Artsy</h1>
				<h2 className='text-sm text-neutral-700'>Wallet With Chain</h2>
				<p className='text-xs mb-2 text-neutral-500'>Style #36252 0YK0G 1000</p>
				<p className='font-black text-2xl tracking-tighter font-sans'>$235</p>
			</main>
			<footer className='font-sans flex flex-col gap-2'>
				<Button
					classname='bg-neutral-900 rounded-sm shadow-md text-neutral-50 !w-fit px-6 py-2 text-sm'
					type='button'>
					<h1>BUY NOW</h1>
				</Button>

				<Button
					classname='!w-fit font-medium underline underline-offset-8 text-sm'
					type='button'>
					<h1>ADD TO CART</h1>
				</Button>
			</footer>
		</section>
	);
};

export default ProductDetailHeader;
