import { FC, ReactElement } from "react";

type THeroBanner = {
	image: string;
};

const HomeHero: FC<THeroBanner> = ({ image }): ReactElement => {
	return (
		<header className='mb-6'>
			<figure className='w-full  h-52 relative overflow-hidden'>
				<img src={image} alt='hero-brand' className='w-full' />
				<section className='text-3xl bottom-10 right-2  absolute'>
					<p className='w-fit bg-neutral-50 px-4 shadow-lg'>This</p>
					<p className='w-fit bg-neutral-50 px-4 relative -top-2 shadow-md'>
						seasons
					</p>
					<p className='w-fit relative -top-4 bg-neutral-50 px-4 shadow-md'>
						latest
					</p>
				</section>
			</figure>
		</header>
	);
};

export default HomeHero;
