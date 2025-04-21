import { useState } from "react";
import { useFilter } from "./store";

export default function Filter() {
	const [active, setActive] = useState("All");
	const options = ["All", "Videos", "Reels"];
	const { setFilter } = useFilter();
	const handleClick = (option: string) => {
		setActive(option);
		setFilter(option);
	};

	return (
		<div className="flex gap-3 mb-4 sticky top-[88px] bg-white z-100 px-8 py-6">
			{options.map((option) => (
				<button
					key={option}
					onClick={() => handleClick(option)}
					className={`px-4 py-2 rounded-[0.5rem] ${
						active === option ? "bg-black text-white font-medium" : "bg-gray-200"
					}`}
				>
					{option}
				</button>
			))}
		</div>
	);
}
