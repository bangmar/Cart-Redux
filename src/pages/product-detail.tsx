import { FC, ReactElement } from "react";
import BaseLayout from "../components/layouts/base-layout";

import dummyProduct from "../assets/home/product1.svg";
import ContentLayout from "../components/layouts/content-layout";
import ProductDetailHeader from "../components/fragments/pruducts-detail-header";
import ProdutDetailTab from "../components/fragments/product-detail-tab";

const ProductDetailPage: FC = (): ReactElement => {
	return (
		<BaseLayout>
			<ContentLayout classname='!gap-10'>
				<figure className=' w-full h-full'>
					<img
						src={dummyProduct}
						alt='dummy-product'
						className='object-contain h-full w-full object-center '
					/>
				</figure>
				<ProductDetailHeader />
			</ContentLayout>
			<ProdutDetailTab />
		</BaseLayout>
	);
};

export default ProductDetailPage;
