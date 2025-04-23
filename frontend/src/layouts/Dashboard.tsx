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
		});
	}, []);

	useEffect(() => {
		if (!playlists || playlists.length === 0) {
			console.log("No playlists found yet.");
			return;
		}

		fetchPlaylistItems(isActive).then((data) => {
			setPlaylistItems(data);
			console.log(data);
		});
	}, [playlists, isActive]);

	return (
		<>
			<Filter />
			<section className="px-8 grid grid-cols-[repeat(auto-fill,minmax(272px,1fr))] gap-6 w-full pb-12">
				{playlistItems.map((item) => (
					<div key={item.id}>
						{(filter === "All" || filter === "Videos" || filter === "Reels") && (
							<Card title={item.title} image={item.thumbnail} url={item.url} />
						)}
					</div>
				))}
			</section>
		</>
	);
};
