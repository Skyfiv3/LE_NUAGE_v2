import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center w-full mt-22">
      <div className="opacity-75 bg-secondary w-full max-w-3xl rounded-2xl shadow-lg p-8 flex gap-8">
        <div className="shrink-0">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={160}
            height={160}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Cappuchini2001</h2>

            <div className="text-primary/80 leading-relaxed mb-4">
              <p>Favorite movie : Titanic</p>
              <p>Favorite actor : Amelia Williams</p>
              <p>Favorite realisator : Michael Bay</p>
              <p>Favorite genre : romantic</p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-primary">About me :</label>
              <input
                type="text"
                defaultValue="I love romantic movies <3"
                className="p-3 rounded-lg border border-gray-400 text-primary"
              />
              <button className="bg-primary text-white w-fit px-4 py-2 rounded-lg hover:opacity-75 transition">
                Edit your profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl mt-12 mb-6">Latest reviews</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { title: "Roofman", director: "Derek Clanflance", img: "/roofman.jpeg" },
          { title: "Wicked: For Good", director: "Jon Chu", img: "/wicked_part2.jpg" },
          { title: "The Substance", director: "Coralie Fargat", img: "/the_substance.jpeg" },
          { title: "The Roses", director: "Ian Roach", img: "/the_roses.jpeg" },
          { title: "Good Fortune", director: "Azis Ansari", img: "/good_fortune.jpeg" },
          { title: "Juror #2", director: "Clit Eastwood", img: "/juror2.jpeg" },
        ].map((movie, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src={movie.img}
              alt={movie.title}
              width={400}
              height={500}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-primary">
              <h4 className="font-bold text-lg">{movie.title}</h4>
              <p className="text-sm opacity-80">Directed by {movie.director}</p>
              <div className="mt-2">★★★★★</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}