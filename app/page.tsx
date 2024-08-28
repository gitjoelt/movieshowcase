import Menu from "./components/Menu";
import MovieCards from "./components/MovieCards";
import * as constants from "./constants/constants";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let [nav] = Object.keys(searchParams);
  nav = constants.categories.includes(nav) ? nav : "animation";
  return (
    <div className="container mx-auto pt-6">
      <section className="prose max-w-none">
        <h1 className="mb-2">Movie Showcase</h1>
        <p className="mb-2 mt-0">
          Browse a selection of movies per the categories below
        </p>
      </section>

      <Menu nav={nav} />
      <MovieCards catalogue={nav} />
    </div>
  );
}
