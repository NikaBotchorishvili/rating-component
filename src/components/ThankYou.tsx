type ThankYouProps = {
	rating: number;
    icon: string
};
function ThankYou({ rating, icon }: ThankYouProps) {
	return (
		<section className="flex flex-col items-center p-5 text-center bg-darkBlue rounded-xl gap-y-8">
			<img src={icon} alt="" />
			<small className="text-Orange bg-[rgb(32,49,59)] text-lg px-4 py-2 rounded-full">
				You selected {rating} out of 5
			</small>
			<h1 className="text-3xl text-white">Thank you!</h1>
			<p className="max-w-xs text-mediumGrey">
				We appreciate you taking the time to give a rating. If you ever
				need more support, don't hesitate to get in touch
			</p>
		</section>
	);
}

export default ThankYou;
