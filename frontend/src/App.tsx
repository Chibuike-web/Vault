import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "./layouts/Dashboard";
import Frontend from "./pages/Frontend";
import Design from "./pages/Design";
import Ai from "./pages/Ai";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<Frontend />} />
					<Route path="design" element={<Design />} />
					<Route path="ai" element={<Ai />} />
				</Route>
			</Routes>
		</Router>
	);
}
