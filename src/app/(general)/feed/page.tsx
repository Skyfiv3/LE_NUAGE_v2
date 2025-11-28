import Link from "next/link";

export default function FeedPage() {
	return (
		<div className="min-h-screen flex flex-col mt-22">
			<div className="w-[90%] max-w-[1100px] mx-auto mt-10 mb-20">
				<div className="bg-secondary opacity-75 p-6 rounded-xl shadow-md flex items-center gap-4 mb-10">
					<img src="/profile.jpg" className="w-[70px] h-[70px] rounded-full object-cover" />

					<div>
						<h3 className="text-xl font-boldm-0">NezukoLover_6</h3>
						<p className="text-sm m-0">Active member — Survived the winter</p>
						<p className="text-sm m-0">54 ❤️ · 6 comments</p>
					</div>
				</div>

				<div className="bg-secondary opacity-75 p-6 rounded-xl shadow-md mb-10">
					<div className="flex items-center gap-4">
						<img src="/profile.jpg" className="w-[70px] h-[70px] rounded-full object-cover" />

						<div>
							<h3 className="text-lg font-bold m-0">Chris24</h3>
							<p className="m-0">Has written a review of The Running Man</p>
							<p className="text-yellow-400 font-bold text-lg">★★★★★</p>
						</div>
					</div>

					<img src="/hunt_him_down.jpeg" className="rounded-xl my-5" />

					<p className="mb-2">
						THE RUNNING MAN delivers a brilliant mix of bold characters and fast-paced action.
						The soundtrack is crazy, the tension never stops growing, and each scene is more
						intense than the previous one. Honestly, a must-watch this year.
					</p>
					<p>12 ❤️</p>
				</div>

				<div className="bg-secondary opacity-75 p-6 rounded-xl shadow-md mb-10">
					<h2 className="text-xl font-bold text-primary mb-6">You might like these new movies</h2>

					<div className="flex flex-wrap gap-6">

						<div className="bg-white shadow-md rounded-xl p-4 w-[30%] min-w-[250px]">
							<img src="/wicked_part2.jpg" className="rounded-lg mb-3 w-full" />
							<h3 className="text-lg font-bold text-primary">Wicked: For Good</h3>
							<p className="text-gray-600 text-sm">Directed by R. Smith</p>
							<Link href="#" className="inline-block mt-3 bg-primary text-white px-3 py-2 rounded-lg text-sm hover:opacity-75 transition">
								Add to watchlist
							</Link>
						</div>

						<div className="bg-white shadow-md rounded-xl p-4 w-[30%] min-w-[250px]">
							<img src="https://i.imgur.com/qbBf6Tj.jpeg" className="rounded-lg mb-3 w-full" />
							<h3 className="text-lg font-bold text-primary">Predator: Badlands</h3>
							<p className="text-gray-600 text-sm">Directed by J. Brown</p>
							<Link href="#" className="inline-block mt-3 bg-primary text-white px-3 py-2 rounded-lg text-sm hover:opacity-75 transition">
								Add to watchlist
							</Link>
						</div>

						<div className="bg-white shadow-md rounded-xl p-4 w-[30%] min-w-[250px]">
							<img src="/the_roses.jpeg" className="rounded-lg mb-3 w-full" />
							<h3 className="text-lg font-bold text-primary">The Roses</h3>
							<p className="text-gray-600 text-sm">Directed by M. Nash</p>
							<Link href="#" className="inline-block mt-3 bg-primary text-white px-3 py-2 rounded-lg text-sm hover:opacity-75 transition">
								Add to watchlist
							</Link>
						</div>

					</div>
				</div>

				<div className="bg-secondary opacity-75 p-6 rounded-xl shadow-md">
					<img src="/juror2.jpeg" className="rounded-xl mb-4" />

					<h3 className="text-xl font-bold">One of your favorite theaters added a new screening!</h3>
					<p>Crowford Dublin</p>
					<p className="font-semibold">From €8</p>

					<Link
						href="#"
						className="inline-block mt-3 bg-primary text-white px-5 py-3 rounded-lg hover:opacity-75 transition"
					>
						Buy a ticket
					</Link>
				</div>

			</div>
		</div>
	);
}
