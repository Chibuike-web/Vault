import Avatar from "../assets/Avatar.png";

export default function Topbar() {
	return (
		<header className="px-8 py-[20px] sticky top-0 z-100 bg-white">
			<div className="flex items-center gap-[10px]">
				<img src={Avatar} alt="" className="w-full max-w-12" />
				<div className="flex flex-col gap-[4px]">
					<h3 className="text-gray-950 font-bold text-[18px]">Chibuike Maduabuchi</h3>
					<p className="text-[14px] text-gray-600 font-medium">Welcome back to Vault 👋🏻</p>
				</div>
			</div>
		</header>
	);
}
