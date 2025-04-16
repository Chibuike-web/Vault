import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Settings from "./components/Settings";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Dashboard />}>
					<Route index element={<Home />} />
					<Route path="settings" element={<Settings />} />
				</Route>
			</Routes>
		</Router>
	);
}
