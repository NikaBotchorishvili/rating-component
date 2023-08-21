type RatingProps = {
	rating: number | null;
	setRating: React.Dispatch<React.SetStateAction<number | null>>;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};
function Rating({ rating, setRating, setCompleted }: RatingProps) {
	return (
		<>
			<img
				src="icon-star.svg"
				className="pb-4 bg-[rgb(32,49,59)] pt-3 px-3 box-content rounded-full"
				alt=""
			/>
			<h1 className="text-3xl text-white">How did we do?</h1>
			<p className="max-w-xs text-sm text-lightGrey">
				Please let us know how we did with your support request. All
				feedback is appreciated to help us improve our offering!
			</p>
			<div className="flex justify-between w-full">
				<button
					className={`text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl  ${
						rating === 1
							? "bg-lightGrey text-white "
							: "hover:bg-Orange hover:text-white"
					}`}
					onClick={() => setRating(1)}
				>
					1
				</button>
				<button
					className={`text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl  ${
						rating === 2
							? "bg-lightGrey text-white "
							: "hover:bg-Orange hover:text-white"
					}`}
					onClick={() => setRating(2)}
				>
					2
				</button>
				<button
					className={`text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl ${
						rating === 3
							? "bg-lightGrey text-white "
							: "hover:bg-Orange hover:text-white"
					}`}
					onClick={() => setRating(3)}
				>
					3
				</button>
				<button
					className={`text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl ${
						rating === 4
							? "bg-lightGrey text-white "
							: "hover:bg-Orange hover:text-white"
					}`}
					onClick={() => setRating(4)}
				>
					4
				</button>
				<button
					className={`text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl ${
						rating === 5
							? "bg-lightGrey text-white "
							: "hover:bg-Orange hover:text-white"
					}`}
					onClick={() => setRating(5)}
				>
					5
				</button>
			</div>
			<button
				className="w-full py-2 text-white rounded-full text-md bg-Orange hover:bg-white hover:text-Orange"
				onClick={() => rating !== null && setCompleted(true)}
			>
				SUBMIT
			</button>
		</>
	);
}

export default Rating;
