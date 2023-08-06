import { FC, ReactElement, useState } from "react";
import Button from "../../elements/button";

const ProdutDetailTab: FC = (): ReactElement => {
	const [tabState, setTabState] = useState<string>("desc");

	return (
		<main className='font-sans text-sm'>
			<section className='flex gap-4 mb-2 '>
				<Button
					classname={`product-tab ${
						tabState === "desc" && "underline underline-offset-8"
					}`}
					type='button'
					onclick={() => {
						setTabState("desc");
					}}>
					Description
				</Button>
				<Button
					classname={`product-tab ${
						tabState === "info" && "underline underline-offset-8"
					}`}
					type='button'
					onclick={() => {
						setTabState("info");
					}}>
					Shipping info
				</Button>
				<Button
					classname={`product-tab ${
						tabState === "payment" && "underline underline-offset-8"
					}`}
					type='button'
					onclick={() => {
						setTabState("payment");
					}}>
					Payment options
				</Button>
			</section>
			<section className='text-neutral-600'>
				{tabState === "desc" ? (
					<section>
						<p className='mb-2'>
							As in handbags, the double ring and bar design defines the wallet
							shape, highlighting the front flap closure which is tucked inside
							the hardware. Completed with an organizational interior, the black
							leather wallet features a detachable chain.
						</p>
						<p>
							All products are made with carefully selected materials. Please
							handle with care for longer product life.
						</p>
					</section>
				) : tabState === "info" ? (
					<section>
						<p className='mb-2'>
							Pre-order, Made to Order and DIY items will ship on the estimated
							date noted on the product description page. These items will ship
							through Premium Express once they become available.
						</p>
						<p>
							Returns may be made by mail or in store. The return window for
							online purchases is 30 days (10 days in the case of beauty items)
							from the date of delivery. You may return products by mail using
							the complimentary prepaid return label included with your order,
							and following the return instructions provided in your digital
							invoice.
						</p>
					</section>
				) : (
					<section>
						<p className='mb-2'>
							We accepts the following forms of payment for online purchases:
						</p>
						<p>
							The full transaction value will be charged to your credit card
							after we have verified your card details, received credit
							authorisation, confirmed availability and prepared your order for
							shipping. For Made To Order, DIY, personalised and selected Décor
							products, payment will be taken at the time the order is placed.
						</p>
					</section>
				)}
			</section>
		</main>
	);
};

export default ProdutDetailTab;
