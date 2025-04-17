import Filter from "../components/Filters";
import { useIsActive, usePlaylists, useFilter } from "../components/store";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard() {
	return (
		<div className="flex w-full h-screen">
			<Sidebar />

			<div className="w-full flex flex-col">
				<Topbar />

				<main className="w-fulloverflow-y-auto">
					<MainContent />
				</main>
			</div>
		</div>
	);
}

const MainContent = () => {
	const { playlists } = usePlaylists();
	const { isActive } = useIsActive();
	const { filter } = useFilter();
	return (
		<div>
			{playlists.map(
				({ id, title }) =>
					isActive === id && (
						<section>
							<Filter />

							{title}
							{filter === "All" ? <p>All</p> : filter === "Videos" ? <p>Video</p> : <p>Reels</p>}
						</section>
					)
			)}
		</div>
	);
};
