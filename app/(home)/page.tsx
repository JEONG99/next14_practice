import { Metadata } from "next";

import Movie from "@/components/movie";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies: IMovie[] = await getMovies();

  return (
    <div className="mx-auto grid grid-cols-repeat-5 gap-6 max-w-[90%] w-full">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id + ""}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
