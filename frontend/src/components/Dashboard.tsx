import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard() {
	return (
		<div className="flex w-full h-screen">
			<Sidebar />

			<div className="w-full flex flex-col">
				<Topbar />

				{/* Main Content */}
				<main className="w-full p-4 overflow-y-auto">
					<Outlet /> {/* This is where Home or Settings will render */}
				</main>
			</div>
		</div>
	);
}
