import { FC, ReactElement } from "react";
import Button from "../components/elements/button";
import ContentLayout from "../components/layouts/content-layout";
import BaseLayout from "../components/layouts/base-layout";
import HomeHero from "../components/fragments/home-hero";
import heroImage from "../assets/home/hero.svg";
import ProductCard from "../components/fragments/product-card";

import product1 from "../assets/home/product1.svg";
import product2 from "../assets/home/product2.svg";
import product3 from "../assets/home/product3.svg";
import product4 from "../assets/home/product4.svg";
import cat1 from "../assets/home/cat1.svg";
import cat2 from "../assets/home/cat2.svg";
import cat3 from "../assets/home/cat3.svg";
import cat4 from "../assets/home/cat4.svg";
import CategoryCard from "../components/fragments/category-card";

const HomePage: FC = (): ReactElement => {
	const dummyProducts = [
		{
			image: product1,
			name: "Artsy Cardy",
			isLiked: false,
			href: "product1",
			price: 101,
		},
		{
			image: product2,
			name: "Berkely",
			isLiked: true,
			href: "product2",
			price: 102,
		},
		{
			image: product3,
			name: "Capucinus",
			isLiked: false,
			href: "product3",
			price: 103,
		},
		{
			image: product4,
			name: "Monogram",
			isLiked: false,
			href: "product4",
			price: 104,
		},
		{
			image: product3,
			name: "Capucinus",
			isLiked: true,
			price: 105,
			href: "product5",
		},
		{
			image: product4,
			name: "Monogram",
			isLiked: false,
			href: "product6",
			price: 106,
		},
	];

	const dummyCategories = [
		{
			name: "Handle Bags",
			image: cat1,
		},
		{ name: "Crossbody Bags", image: cat2 },
		{ name: "Shoulder Bags", image: cat3 },
		{ name: "Tote Bags", image: cat4 },
	];

	return (
		<BaseLayout>
			{/* hero section */}
			<HomeHero image={heroImage} />
			{/* products sections */}

			<ContentLayout>
				{dummyProducts?.map(({ name, image, isLiked, href, price }, index) => {
					return (
						<ProductCard key={index} isLiked={isLiked}>
							<ProductCard.Main
								price={price}
								image={image}
								name={name}
								href={href}
							/>
						</ProductCard>
					);
				})}
			</ContentLayout>

			<Button type='button' classname='grid place-items-center mb-10'>
				<h1 className='primary-btn-text'>CHECK ALL LATEST</h1>
			</Button>

			<section>
				<header className='mb-4'>
					<h1 className='font-bold text-xl'>Shop by Categories</h1>
				</header>
				<ContentLayout>
					{dummyCategories?.map(({ image, name }, index) => {
						return <CategoryCard image={image} name={name} key={index} />;
					})}
				</ContentLayout>
			</section>

			<Button type='button' classname='grid place-items-center mb-10'>
				<h1 className='primary-btn-text'>BROWSE ALL CATEGORIES</h1>
			</Button>
		</BaseLayout>
	);
};

export default HomePage;
