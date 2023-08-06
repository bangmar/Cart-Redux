import { FC, ReactElement } from "react";

import { CgMenuLeftAlt } from "react-icons/cg";
import userIcon from "../../../assets/home/user-icon.svg";

const MobileNavbar: FC = (): ReactElement => {
	return (
		<header className='mb-4'>
			<main className='w-full py-2 flex justify-between items-center'>
				<CgMenuLeftAlt className='text-3xl cursor-pointer' />
				<figure className='h-9 w-9 bg-slate-500 rounded-full overflow-hidden'>
					<img src={userIcon} alt='dummyu-user-icon' className='w-full' />
				</figure>
			</main>
		</header>
	);
};

export default MobileNavbar;
