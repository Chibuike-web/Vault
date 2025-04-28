import { Link } from "react-router";
import { UpDownArrow } from "../Icons";
import Avatar from "../assets/Avatar.png";
import { usePlaylists, Playlist, useIsActive } from "../components/store";
import { useEffect } from "react";

export default function Sidebar() {
	const { playlists } = usePlaylists();
	return (
		<aside className="max-w-[272px] w-full bg-[#f5f5f5] text-black flex flex-col items-center h-screen sticky top-0 pb-4 border-r border-black/10">
			<div className="w-full">
				<div className="px-4 py-6 flex items-center w-full">
					<h1 className="font-bold tracking-[-0.04em] text-[20px] px-[12px] h-[40px] w-full flex items-center">
						Vault
					</h1>
				</div>
				<ul className="px-[16px] pt-[20px] flex flex-col gap-[6px] w-full">
					{playlists.map(({ id, title }: Playlist) => (
						<MenuItem key={id} id={id} title={title} />
					))}
				</ul>
			</div>
			<div className="mt-auto flex px-[12px] py-4 items-center gap-[7px] rounded-[8px] hover:bg-[#e9e9e9]">
				<img src={Avatar} alt="" className="w-full max-w-10" />
				<div className="flex flex-col gap-[4px]">
					<h3 className="text-[14px] text-gray-950 font-medium">Chibuike Maduabuchi</h3>
					<p className="text-[12px] text-gray-600">obinnatc2018@gmail.com</p>
				</div>
				<UpDownArrow />
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
		<Link to={`/${id}`}>
			<li
				id={id}
				className={`flex gap-[0.625rem] items-center rounded-[0.5rem] h-9 px-4 text-[0.875rem] hover:bg-[#e9e9e9] cursor-pointer ${
					isActive === id ? "bg-[#e8e8e8] font-semibold text-gray-950" : ""
				}`}
				onClick={() => {
					setIsActive(id);
				}}
			>
				{title}
			</li>
		</Link>
	);
};
