import Card from "../components/Card";
import Filter from "../components/Filters";
import { useState } from "react";

export default function FrontendVault() {
	const [filter, setFilter] = useState("All");

	return (
		<div className="px-8 py-[1.25rem]">
			<Filter setFilter={setFilter} />

			{filter === "All" && <Card />}
			{filter === "Videos" && <div>Maduabuchi</div>}
			{filter === "Reels" && <div>Timothy</div>}
		</div>
	);
}
