export async function fetchPlaylistItems(playlistId: string) {
	const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

	try {
		const res = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
		);
		if (!res.ok) throw new Error("Error fetching playlist items");
		const data = await res.json();

		const items = data.items.map((item: any) => {
			const videoId = item.snippet.resourceId.videoId;
			return {
				id: item.id,
				title: item.snippet.title,
				videoId,
				thumbnail: item.snippet.thumbnails?.medium?.url || "",
				url: `https://www.youtube.com/watch?v=${videoId}`,
			};
		});
		return items;
	} catch (error) {
		console.error(`Issue fetching items for playlist ${playlistId}:`, error);
		return [];
	}
}
