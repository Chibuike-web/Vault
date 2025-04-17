import { create } from "zustand";

export type Playlist = {
	id: string;
	title: string;
};

export const initialPlaylists: Playlist[] = [
	{ id: "frontend", title: "Frontend Vault" },
	{ id: "design", title: "HCI + Design" },
	{ id: "ai", title: "AI/ML" },
	{ id: "deeptech", title: "Deep Tech Talks" },
];

type PlaylistsStore = {
	playlists: Playlist[];
	setPlaylists: (newPlaylists: Playlist[]) => void;
};

type isActiveStore = {
	isActive: string;
	setIsActive: (id: string) => void;
};

const usePlaylistsStore = create<PlaylistsStore>((set) => ({
	playlists: initialPlaylists,
	setPlaylists: (newPlaylists: Playlist[]) => set({ playlists: newPlaylists }),
}));

const useIsActiveStore = create<isActiveStore>((set) => ({
	isActive: "",
	setIsActive: (id: string) => set({ isActive: id }),
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
