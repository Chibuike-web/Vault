import Filter from "../components/Filters";
import { useState } from "react";

export default function Design() {
	const [filter, setFilter] = useState("All");

	return (
		<div className="px-8 py-[1.25rem]">
			<Filter setFilter={setFilter} />
			<div>AL/ML </div>
			{filter === "All" && <div>Chibuike</div>}
			{filter === "Videos" && <div>Maduabuchi</div>}
			{filter === "Reels" && <div>Timothy</div>}
		</div>
	);
}
