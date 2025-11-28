import Link from "next/link";

export default function LoginPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-[#e9ecff] w-full">
			<div className="bg-white w-1/3 rounded-2xl shadow-lg text-center p-8">
				<div className="flex justify-center items-center">
					<p className="text-4xl mb-2 font-bold text-primary">Le Nuage</p>
				</div>

				<h2 className="text-2xl mb-6 text-primary font-bold">Connexion</h2>

				<form method="POST" className="flex flex-col">
					<input
						type="text"
						name="username"
						placeholder="Username"
						required
						className="w-full p-3 mb-4 rounded-lg border border-gray-400 text-md text-primary"
					/>

					<input
						type="password"
						name="password"
						placeholder="Password"
						required
						className="w-full p-3 mb-6 rounded-lg border border-gray-400 text-md text-primary"
					/>

					<button
						type="submit"
						className="w-full p-3 bg-primary text-white text-md rounded-lg hover:opacity-75 transition"
					>
						Log in
					</button>
				</form>

				<Link href="#" className="mt-4 block text-sm text-primary hover:underline">
					Forgot your password?
				</Link>

				<Link href="/signup" className="mt-1 block text-sm text-primary hover:underline">
					Create an account
				</Link>

				<Link href="/" className="mt-1 block text-sm text-primary hover:underline">
					Return to homepage
				</Link>
			</div>
		</div>
	);
}
