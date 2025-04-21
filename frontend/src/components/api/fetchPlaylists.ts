export async function fetchPlaylists() {
	const channelId = "UCDqa5sL3Kz0V2xITG-T95kw";
	const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
	try {
		const res = await fetch(
			`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=10&key=${apiKey}`
		);

		if (!res.ok) {
			throw new Error("Error fetching playlists");
		}
		const data = await res.json();
		// Transform data to match your Playlist[] type
		const playlists = data.items.map((item: any) => ({
			id: item.id,
			title: item.snippet.title,
			thumbnail: item.snippet.thumbnails?.medium?.url || "",
		}));

		return playlists;
	} catch (error) {
		console.error("Issue fetching playlists: ", error);
		return [];
	}
}
