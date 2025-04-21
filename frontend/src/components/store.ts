import { create } from "zustand";

export type Playlist = {
	id: string;
	title: string;
	thumbnail?: string;
};

export type PlaylistItem = {
	id: string;
	title: string;
	videoId: string;
	thumbnail: string;
	playlistId?: string;
};

type PlaylistsStore = {
	playlists: Playlist[];
	setPlaylists: (newPlaylists: Playlist[]) => void;
};

type isActiveStore = {
	isActive: string;
	setIsActive: (id: string) => void;
};

type FilterStore = {
	filter: string;
	setFilter: (value: string) => void;
};

type PlaylistItemsStore = {
	playlistItems: PlaylistItem[];
	setPlaylistItems: (newItems: PlaylistItem[] | ((prev: PlaylistItem[]) => PlaylistItem[])) => void;
};

const usePlaylistsStore = create<PlaylistsStore>((set) => ({
	playlists: [],
	setPlaylists: (newPlaylists: Playlist[]) => set({ playlists: newPlaylists }),
}));

const usePlaylistItemsStore = create<PlaylistItemsStore>((set, get) => ({
	playlistItems: [],
	setPlaylistItems: (newItems) => {
		const current = get().playlistItems;
		const updated = typeof newItems === "function" ? newItems(current) : newItems;
		set({ playlistItems: updated });
	},
}));

const useIsActiveStore = create<isActiveStore>((set) => ({
	isActive: "",
	setIsActive: (id: string) => set({ isActive: id }),
}));

const useFilterStore = create<FilterStore>((set) => ({
	filter: "All",
	setFilter: (value: string) => set({ filter: value }),
}));

export const usePlaylists = () => {
	const playlists = usePlaylistsStore((state) => state.playlists);
	const setPlaylists = usePlaylistsStore((state) => state.setPlaylists);
	return { playlists, setPlaylists };
};

export const useIsActive = () => {
	const isActive = useIsActiveStore((state) => state.isActive);
	const setIsActive = useIsActiveStore((state) => state.setIsActive);

	return {
		isActive,
		setIsActive,
	};
};

export const useFilter = () => {
	const filter = useFilterStore((state) => state.filter);
	const setFilter = useFilterStore((state) => state.setFilter);
	return {
		filter,
		setFilter,
	};
};

export const usePlaylistItems = () => {
	const playlistItems = usePlaylistItemsStore((state) => state.playlistItems);
	const setPlaylistItems = usePlaylistItemsStore((state) => state.setPlaylistItems);
	return { playlistItems, setPlaylistItems };
};
