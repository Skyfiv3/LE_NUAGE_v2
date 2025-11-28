"use client";

import Image from "next/image";

export default function MovieContainer({ movie }: {
  movie:
  { year: string; director: string; description: string; id: string; genre: string; name: string }
}) {
  return (
    <div className="mt-28 w-full">
      <div className="px-10">
        <h1 className="text-4xl mb-6">{movie.name}</h1>
        <p className="mb-4 text-xl">Directed by {movie.director}</p>
        <p className="mb-4">Genre: {movie.genre}</p>
        <Image
          src="/wicked_part2.jpg"
          alt="Movie Poster"
          width={1200}
          height={800}
          className="mb-8"
        />
        <h1 className="text-2xl mb-8">Premise</h1>
        <p className="text-xl leading-relaxed mb-12">{movie.description}</p>
      </div>
    </div>
  );
}
