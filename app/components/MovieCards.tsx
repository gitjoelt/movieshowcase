"use client";
import type { Movie } from "../constants/types";

export default function MovieCards({ catalogue }: { catalogue: Movie[] }) {
  if (!catalogue) return;

  return (
    <section className="flex flex-row flex-wrap gap-6 pt-6">
      {catalogue.map((record) => (
        <div key={record.id} className="card bg-base-100 w-72 shadow-xl">
          <figure>
            <img src={record.posterURL} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{record.title}</h2>
            <div className="flex flex-row gap-2">
              <a
                href={`https://imdb.com/title/${record.imdbId}`}
                className="badge bg-yellow-300 text-black font-bold"
                target="_blank"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
