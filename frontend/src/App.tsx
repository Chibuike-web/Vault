import Dashboard from "./layouts/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContent from "./layouts/MainContent";
import NotFound from "./layouts/NotFound";
import Auth from "./layouts/Auth";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		children: [{ path: ":id", element: <MainContent /> }],
	},
	{
		path: "*",
		element: <NotFound />,
	},
	{
		path: "/signin",
		element: <Auth />,
	},
]);

export default function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}
