import { FC } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

type TLikeButtonProps = {
	isLiked: boolean;
};

const LikeButton: FC<TLikeButtonProps> = ({ isLiked }) => {
	return (
		<section>
			{isLiked ? (
				<AiFillHeart className={"text-2xl"} />
			) : (
				<AiOutlineHeart className={"text-2xl"} />
			)}
		</section>
	);
};

export default LikeButton;
