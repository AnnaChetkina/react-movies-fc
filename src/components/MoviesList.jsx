import React from "react";
import MovieItem from "./MovieItem";

export default function MoviesList({ list }) {
  return (
    <div className="movies">
      {list?.length ? (
        list.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            id={movie.imdbID}
            img={movie.Poster}
            title={movie.Title}
            type={movie.Type}
            year={movie.Year}
          />
        ))
      ) : (
        <h5>Нет данных</h5>
      )}
    </div>
  );
}
