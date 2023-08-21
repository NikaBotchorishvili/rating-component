import { useState } from "react";
import ThankYou from "./components/ThankYou";
import Rating from "./components/Rating";
function App() {
	const [rating, setRating] = useState<null | number>(null);
	const [completed, setCompleted] = useState<boolean>(false);

	return (
        <section className="flex flex-col items-start p-5 bg-darkBlue rounded-xl gap-y-8">
            {completed ? (
                <ThankYou />
            ) : (
                <Rating
                    rating={rating}
                    setRating={setRating}
                    setCompleted={setCompleted}
                />
            )}
        </section>

    )
}

export default App;
