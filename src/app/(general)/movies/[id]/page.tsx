"use server";

import MovieContainer from "./movie";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const response = await fetch("https://j55wpg0mc7.execute-api.eu-west-2.amazonaws.com/default/Get_Movies");
  const data = await response.json();
  const movie = data.find((m: { id: string }) => m.id === params.id);

  if (!movie) {
    return (
      <div className="min-h-[85vh] w-full bg-gray-50 flex items-center justify-center">
        <div className="max-w-3xl bg-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Movie Not Found</h1>
          <p className="text-gray-600 leading-relaxed">
            Sorry, we couldn&apos;t find the movie you&apos;re looking for.
          </p>
        </div>
      </div>
    );
  }

  return <MovieContainer movie={movie} />;
}
