"use client";
import { useState, useEffect } from "react";
import type { Movie } from "../constants/types";
import MovieCards from "./MovieCards";
import Search from "./Search";

export default function MovieSection({ movies }: { movies: Movie[] }) {
  const [catalogue, setCatalogue] = useState([...movies]);

  const handleSearchQueries = (event: { target: HTMLInputElement }) => {
    const currentQuery = event?.target?.value.toLowerCase() ?? "";
    if (currentQuery) {
      setCatalogue(
        movies.filter((el) => el.title.toLowerCase().startsWith(currentQuery))
      );
    } else {
      setCatalogue([...movies]);
    }
  };

  return (
    <>
      <Search handleSearchQueries={handleSearchQueries} />
      <MovieCards catalogue={catalogue} />
    </>
  );
}
