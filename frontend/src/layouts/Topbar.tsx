import { NotificationIcon, SearchIcon } from "../Icons";

export default function Topbar() {
	return (
		<header className="px-8 py-[28px] flex justify-between items-center sticky top-0 z-100 bg-white border-b border-black/10">
			<h2 className="text-[20px] font-semibold">Welcome Chibuike</h2>
			<div className="flex items-center">
				<button type="button">
					<SearchIcon />
				</button>
				<button type="button">
					<NotificationIcon />
				</button>
			</div>
		</header>
	);
}
