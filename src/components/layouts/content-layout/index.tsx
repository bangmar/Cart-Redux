import { FC, ReactElement, ReactNode } from "react";

type TContentLayoutProps = {
	children: ReactNode;
	classname?: string;
};

const ContentLayout: FC<TContentLayoutProps> = ({
	children,
	classname,
}): ReactElement => {
	return (
		<section className={`grid grid-cols-2 gap-6 mb-10 ${classname}`}>
			{children}
		</section>
	);
};

export default ContentLayout;
