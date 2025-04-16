import { useState } from "react";

export default function Filter({ setFilter }: { setFilter: (option: string) => void }) {
	const [active, setActive] = useState("All");
	const options = ["All", "Videos", "Reels"];

	const handleClick = (option: string) => {
		setActive(option);
		setFilter(option);
	};

	return (
		<div className="flex gap-3 mb-4">
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
