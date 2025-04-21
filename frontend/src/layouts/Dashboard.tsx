import { useEffect } from "react";
import Card from "../components/Card";
import Filter from "../components/Filters";
import { useIsActive, usePlaylists, useFilter, usePlaylistItems } from "../components/store";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { fetchPlaylists } from "../components/api/fetchPlaylists";
import { fetchPlaylistItems } from "../components/api/fetchPlaylistItems";

export default function Dashboard() {
	return (
		<div className="flex w-full">
			<Sidebar />

			<div className="w-full flex flex-col">
				<Topbar />

				<main className="w-full">
					<MainContent />
				</main>
			</div>
		</div>
	);
}

const MainContent = () => {
	const { playlists, setPlaylists } = usePlaylists();
	const { isActive } = useIsActive();
	const { filter } = useFilter();
	const { playlistItems, setPlaylistItems } = usePlaylistItems();

	useEffect(() => {
		fetchPlaylists().then((data) => {
			setPlaylists(data);
			console.log(data);
		});
	}, []);

	useEffect(() => {
		if (!playlists || playlists.length === 0) {
			console.log("No playlists found yet.");
			return;
		}
		const fetchAllItems = async () => {
			for (let playlist of playlists) {
				console.log("Fetching items for playlist:", playlist.id);

				const items = await fetchPlaylistItems(playlist.id);
				console.log("Fetched items:", items);

				// Only set if you want to see them in UI
				setPlaylistItems((prev) => [...prev, ...items]);
			}
		};

		fetchAllItems();
	}, [playlists]);

	return (
		<div>
			<Filter />
			<section className="px-8 grid grid-cols-4 gap-6 w-full">
				{playlists.map((playlist) =>
					playlist.id === isActive
						? playlistItems.map((item) => (
								<div key={item.id}>
									{(filter === "All" || filter === "Videos" || filter === "Reels") && (
										<Card title={item.title} image={item.thumbnail} />
									)}
								</div>
						  ))
						: null
				)}
			</section>
		</div>
	);
};
