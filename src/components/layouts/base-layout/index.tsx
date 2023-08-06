import { FC, ReactElement, ReactNode } from "react";
import MobileNavbar from "../../elements/mobile-navbar";
import MobileTaskbar from "../../elements/mobile-taskbar";

import CartPopup from "../../fragments/cart-popup";

type TBaseLayoutProps = {
	children: ReactNode;
};

const BaseLayout: FC<TBaseLayoutProps> = ({ children }): ReactElement => {
	return (
		<section className='px-8 pt-6 pb-10 mb-12 font-serif'>
			<MobileNavbar />
			{children}
			<MobileTaskbar />
			<CartPopup />
		</section>
	);
};

export default BaseLayout;
