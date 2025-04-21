import VaultLogo from "../assets/VaultLogo.svg";
import { DoubleArrow, ChevronRight } from "../Icons";
import Avatar from "../assets/Avatar.png";
import { usePlaylists, Playlist, useIsActive } from "../components/store";
import { useEffect } from "react";

export default function Sidebar() {
	const { playlists } = usePlaylists();
	return (
		<aside className="max-w-[272px] w-full bg-[#f5f5f5] text-black flex flex-col h-[1080px] sticky top-0">
			<div>
				<div className="px-[1.25rem] py-6 flex items-center justify-between">
					<div className="flex gap-[0.75rem] items-center">
						<img src={VaultLogo} alt="Brand Logo" className="w-full max-w-10" />
						<div className="flex flex-col gap-[0.25rem]">
							<h3 className="text-[0.875rem] font-bold">Vault</h3>
							<p className="text-gray-600 text-[0.75rem] font-medium">Playlist Manager</p>
						</div>
					</div>
					<figure className="bg-white border border-gray-200 rounded-[0.375rem]">
						<DoubleArrow />
					</figure>
				</div>
				<ul className="px-[1.25rem] pt-[1.5rem] flex flex-col gap-[0.25rem]">
					{playlists.map(({ id, title }: Playlist) => (
						<MenuItem key={id} id={id} title={title} />
					))}
				</ul>
			</div>
			<div className="mt-auto flex px-[1.25rem] py-6 items-center gap-[0.75rem]">
				<img src={Avatar} alt="" className="w-full max-w-10" />
				<div className="flex flex-col gap-[0.25rem]">
					<h3 className="text-[0.875rem] text-gray-950 font-medium">Chibuike Maduabuchi</h3>
					<p className="text-[0.75rem] text-gray-600">obinnatc2018@gmail.com</p>
				</div>
				<ChevronRight />
			</div>
		</aside>
	);
}

const MenuItem = ({ id, title }: Playlist) => {
	const { isActive, setIsActive } = useIsActive();
	const { playlists } = usePlaylists();

	useEffect(() => {
		if (!isActive && playlists.length > 0) {
			setIsActive(playlists[0].id);
		}
	}, [isActive, playlists, setIsActive]);

	return (
		<li
			id={id}
			className={`flex gap-[0.625rem] items-center rounded-[0.5rem] h-10 px-4 text-[0.875rem] hover:bg-[#e9e9e9] cursor-pointer ${
				isActive === id ? "bg-[#e8e8e8]" : ""
			}`}
			onClick={() => {
				setIsActive(id);
			}}
		>
			{title}
		</li>
	);
};
