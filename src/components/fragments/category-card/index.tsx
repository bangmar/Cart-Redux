import { FC, ReactElement } from "react";

type TCategoriesProps = {
	image: string;
	name: string;
};

const CategoryCard: FC<TCategoriesProps> = ({ image, name }): ReactElement => {
	return (
		<figure className='bg-neutral-400 h-60 overflow-hidden cursor-pointer group rounded-sm shadow-md relative'>
			<img
				src={image}
				alt={name}
				className='h-full w-full object-cover group-hover:scale-105 transition-all ease-in-out duration-100'
			/>
			<h1 className='text-neutral-50 bg-neutral-900 w-fit px-4 text-sm py-2 absolute right-0 bottom-0'>
				{name}
			</h1>
		</figure>
	);
};

export default CategoryCard;
