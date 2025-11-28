"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const cinemas = [
    { name: "Cineworld - Dublin", location: "The Parnell Centre, Parnell St" },
    { name: "Savoy Cinema", location: "Dublin 1" },
    { name: "Light House Cinema", location: "Market St" },
    { name: "ODEON - Point Square", location: "E Wall Rd" },
  ];

  const reviews = [
    {
      movie_title: "The Running Man",
      movie_year: 2025,
      author: "Adrian",
      content: "THE RUNNING MAN is glorious, a brilliantly old-school blockbuster: fast-paced, action-packed yet character-driven, with a chaotic energy reminiscent of SCOTT PILGRIM. Glenn Powell burns up the screen, angry, masculine, funny and with a proper film star charisma. Loved it!"
    },
    {
      movie_title: "Chainsaw Man - The Movie: Reze Arc",
      movie_year: 2025,
      author: "Jane Smith",
      content: "Chainsaw Man: Reze Arc delivers everything - stunning visuals, heartbreaking emotion, and unforgettable characters. The romance, betrayal, and tragedy hit with full force. The animation is breathtaking, truly peak cinema. MAPPA crafted a masterpiece, making this one of 2025's best and most emotional anime films."
    },
    {
      movie_title: "One Battle After Another",
      movie_year: 2025,
      author: "Lucie",
      content: "The excellent performances of DiCaprio and Del Toro bring a deep sense of humanism to two characters who, given the dramatic tone employed, always run the risk of coming across as caricatured stereotypes."
    },
  ];

  const [upcomingMovies, setUpcomingMovies] = useState<{ year: string; director: string; description: string; id: string; genre: string; name: string }[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://j55wpg0mc7.execute-api.eu-west-2.amazonaws.com/default/Get_Movies");
      const data = await response.json();
      setUpcomingMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen mt-36">
      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-secondary rounded-xl pt-2">
          <h1 className="text-4xl font-bold mb-1">POPULAR NOW</h1>
          <Image
            src="/wicked_part2.jpg"
            alt="Le Nuage Logo"
            width={800}
            height={800}
          />
        </div>
        <div className="grid grid-cols-5 w-19/20 m-8 gap-16">
          <div className="col-span-2 flex flex-col">
            <h2 className="text-2xl mb-2 bg-secondary rounded-xl w-full text-center p-4">Cinemas near you</h2>
            <div className="w-full bg-accent rounded-xl p-4">
              {cinemas.map((cinema, index) => (
                <div key={index}>
                  <div className="mb-4 flex justify-between items-center py-1">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl text-black">{cinema.name}</h3>
                      <p className="text-gray-600">{cinema.location}</p>
                    </div>
                    <button className="p-3 bg-secondary text-white rounded-lg hover:opacity-75">
                      About
                    </button>
                  </div>
                  {index < cinemas.length - 1 && (
                    <div className="border-b-4 border-white mb-4"/>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <h2 className="text-2xl mb-2 p-4 w-full text-center">Trending reviews</h2>
            <div className="w-full px-4">
              {reviews.map((review, index) => (
                <div key={index}>
                  <div className="mb-4 flex justify-between items-center bg-secondary rounded-xl p-4">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl text-white">{review.movie_title} ({review.movie_year})</h3>
                      <p className="text-gray-800 text-sm">Review by {review.author}</p>
                      <p className="text-white text-xs">{review.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-[#e9ecff] flex flex-col items-center pb-6">
          <h2 className="mt-8 mb-4 text-2xl font-bold py-3 px-16 rounded-2xl bg-secondary text-black opacity-75">Upcoming Movies</h2>
          {upcomingMovies.length > 0 ? (
            <div className="grid grid-cols-3 gap-8 w-19/20">
              {upcomingMovies.map((movie) => (
                <div key={movie.id} className="bg-white rounded-xl p-4 flex flex-col items-center">
                  <Link href={`/movies/${movie.id}`} className="text-xl font-semibold mb-2 text-primary hover:underline">
                    {movie.name} ({movie.year})
                  </Link>
                  <p className="text-gray-600 mb-2">Directed by: {movie.director}</p>
                  <p className="text-gray-800 text-sm text-center">{movie.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Loading movies...</p>
          )}
        </div>
      </main>
    </div>
  );
}
