import { FC, ReactElement, ReactNode } from "react";

import { Link } from "react-router-dom";

type TButtonProps = {
	children: ReactNode;
	type?: "button" | "reset" | "submit";
	classname?: string;
	onclick?: () => void;
	href?: string;
};

const Button: FC<TButtonProps> = ({
	type = "button",
	children,
	classname,
	onclick,
	href,
}): ReactElement => {
	if (href) {
		return (
			<Link to={href}>
				<button className={`w-full ${classname}`} type={type} onClick={onclick}>
					{children}
				</button>
			</Link>
		);
	}

	return (
		<button className={`w-full  ${classname}`} type={type} onClick={onclick}>
			{children}
		</button>
	);
};

export default Button;
