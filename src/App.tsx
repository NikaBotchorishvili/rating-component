function App() {
	return (
		<section className="flex flex-col items-start p-5 bg-darkBlue rounded-xl gap-y-8">
			<img src="icon-star.svg" className="pb-4 bg-[rgb(32,49,59)] pt-3 px-3 box-content rounded-full" alt="" />
			<h1 className="text-3xl text-white">How did we do?</h1>
			<p className="max-w-xs text-sm text-lightGrey">
				Please let us know how we did with your support request. All
				feedback is appreciated to help us improve our offering!
			</p>
			<div className="flex justify-between w-full">
				<button className="text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl">
					1
				</button>
				<button className="text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl">
					2
				</button>
				<button className="text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl">
					3
				</button>
				<button className="text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl">
					4
				</button>
				<button className="text-lightGrey bg-[rgb(32,49,59)] box-content p-1 h-[40px] w-[40px] rounded-full text-xl">
					5
				</button>
			</div>
            <button className="w-full py-2 text-lg text-white rounded-full bg-Orange">SUBMIT</button>
		</section>
	);
}

export default App;
