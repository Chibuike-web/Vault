import { GoogleIcon } from "../Icons";

const handleGoogleLogin = () => {
	console.log("Clicked Google Sign-In");
	window.location.href = "http://localhost:4000/auth/google";
};

export default function Auth() {
	return (
		<div className="h-screen bg-gray-100 justify-items-center content-center  tracking-[-0.04em]">
			<h1 className="mb-16 font-semibold text-[2rem] text-gray-900">Welcome to Vault</h1>
			<button
				type="button"
				className="bg-white px-[20px] py-[12px] font-medium tracking-[-0.02em] rounded-[8px] flex gap-[12px] items-center cursor-pointer"
				onClick={handleGoogleLogin}
			>
				<GoogleIcon /> Sign in with Google
			</button>
		</div>
	);
}
