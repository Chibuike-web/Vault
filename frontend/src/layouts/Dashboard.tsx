import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard() {
	return (
		<div className="flex w-full h-screen">
			<Sidebar />

			<div className="w-full flex flex-col">
				<Topbar />

				<main className="w-fulloverflow-y-auto"></main>
			</div>
		</div>
	);
}
