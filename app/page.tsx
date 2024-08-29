import Menu from "./components/Menu";
import MovieSection from "./components/MovieSection";
import * as constants from "./constants/constants";
import type { Movie } from "./constants/types";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let [nav] = Object.keys(searchParams);
  nav = constants.categories.includes(nav) ? nav : "animation";
  const res = await fetch(`https://api.sampleapis.com/movies/${nav}`);
  const data: Movie[] = await res.json();
  return (
    <>
      <div className="hero bg-base-200 h-60">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Movie Showcase</h1>
            <p className="py-6">
              Browse and search through a selection of movies per the categories
              below
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-6">
        <Menu nav={nav} />
        <MovieSection movies={data} />
      </div>
    </>
  );
}
