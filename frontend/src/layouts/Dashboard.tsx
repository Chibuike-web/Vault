import { Outlet, useLocation, useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { usePlaylists, usePlaylistItems } from "../components/store";
import { fetchPlaylists } from "../components/api/fetchPlaylists";
import { fetchPlaylistItems } from "../components/api/fetchPlaylistItems";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
	const { playlists, setPlaylists } = usePlaylists();
	const { setPlaylistItems } = usePlaylistItems();
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/" && playlists.length > 0) {
			navigate(`/${playlists[0].id}`);
		}
	}, [location.pathname, playlists, navigate]);

	useEffect(() => {
		fetchPlaylists().then((data) => {
			setPlaylists(data);
		});
	}, []);

	useEffect(() => {
		if (!playlists || playlists.length === 0) {
			return;
		}

		if (!id) {
			console.log("No playlist ID provided.");
			return;
		}

		fetchPlaylistItems(id).then((data) => {
			setPlaylistItems(data);
		});
	}, [playlists, id]);
	return (
		<div className="flex w-full">
			<Sidebar />

			<div className="w-full flex flex-col">
				<Topbar />

				<main className="w-full">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
