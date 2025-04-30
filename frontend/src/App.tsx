import Dashboard from "./layouts/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContent from "./layouts/MainContent";
import NotFound from "./layouts/NotFound";
import SignIn from "./layouts/SignIn";

const router = createBrowserRouter([
	{
		path: "/signin",
		element: <SignIn />,
	},
	{
		path: "/",
		element: <Dashboard />,
		children: [{ path: ":id", element: <MainContent /> }],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}
