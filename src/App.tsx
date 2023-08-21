import { useState } from "react";
import ThankYou from "./components/ThankYou";
import Rating from "./components/Rating";
import starIcon from "/icon-star.svg"
import thankYouIllustration from "/illustration-thank-you.svg"
function App() {
	const [rating, setRating] = useState<null | number>(null);
	const [completed, setCompleted] = useState<boolean>(false);

	return completed && rating !== null ? (
		    <ThankYou rating={rating} icon={thankYouIllustration}  />
	) : (
		<Rating
			rating={rating}
			setRating={setRating}
			setCompleted={setCompleted}
            icon={starIcon}
		/>
	);
}

export default App;
