import { Outlet, useLocation, useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { usePlaylists, usePlaylistItems } from "../components/store";
import { fetchPlaylists } from "../components/api/fetchPlaylists";
import { fetchPlaylistItems } from "../components/api/fetchPlaylistItems";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
	const { playlists, setPlaylists } = usePlaylists();
	const { setPlaylistItems } = usePlaylistItems();
	const [loading, setLoading] = useState(true);
	const [authenticated, setAuthenticated] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/" && playlists.length > 0) {
			navigate(`/${playlists[0].id}`);
		}
	}, [location.pathname, playlists, navigate]);

	// useEffect(() => {
	// 	fetchPlaylists().then((data) => {
	// 		setPlaylists(data);
	// 	});
	// }, []);

	useEffect(() => {
		if (authenticated) {
			const fetchData = async () => {
				try {
					const res = await fetch("http://localhost:4000/api/session", {
						credentials: "include",
					});
					const session = await res.json();
					console.log("Session response:", session);

					const accessToken = session.accessToken;

					// Now fetch playlists from YouTube
					const playlistRes = await fetch(
						"https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=50",
						{
							headers: {
								Authorization: `Bearer ${accessToken}`,
							},
						}
					);
					const playlistData = await playlistRes.json();
					console.log("YouTube playlist data:", playlistData);

					const playlists =
						playlistData.items?.map((item: any) => ({
							id: item.id,
							title: item.snippet.title,
							thumbnail: item.snippet.thumbnails?.medium?.url || "",
						})) || [];

					setPlaylists(playlists);
				} catch (error) {
					console.error("Failed to fetch session or playlists:", error);
				}
			};

			fetchData();
		}
	}, [authenticated]);

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

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await fetch("http://localhost:4000/api/session", {
					credentials: "include",
				});
				if (res.ok) {
					setAuthenticated(true);
				} else {
					navigate("/signin");
				}
			} catch {
				navigate("/signin");
			} finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, []);

	if (loading) return <div>Loading...</div>;

	if (!authenticated) return null;

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
