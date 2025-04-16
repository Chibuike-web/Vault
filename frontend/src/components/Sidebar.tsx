import { Link } from "react-router-dom";
import VaultLogo from "../assets/VaultLogo.svg";
import { DoubleArrow } from "../Icons";

export default function Sidebar() {
	return (
		<aside className="max-w-[272px] w-full bg-[#f5f5f5] text-black">
			<div className="px-[20px] py-6 flex items-center justify-between">
				<div className="flex gap-[12px] items-center">
					<img src={VaultLogo} alt="Brand Logo" className="w-full max-w-10" />
					<div className="flex flex-col gap-[4px]">
						<h3 className="text-[14px] font-bold">Vault</h3>
						<p className="text-gray-600 text-[12px] font-medium">Playlist Manager</p>
					</div>
				</div>
				<figure className="bg-white border border-gray-200 rounded-[6px]">
					<DoubleArrow />
				</figure>
			</div>
			<ul className="px-[20px] pt-[40px]">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/settings">Settings</Link>
				</li>
			</ul>
		</aside>
	);
}
