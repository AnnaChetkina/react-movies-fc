import React, { useEffect, useRef, useState } from "react";
import MoviesList from "../components/MoviesList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import { getMovies } from "../api/api";

export default function Main() {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const searchMovies = (searchStr, type) => {
    setLoading(true);
    getMovies(searchStr, type)
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setLoading(false);
        } else {
          throw new Error(data.Error);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <main className="container content">
      <Search handleSearch={searchMovies} />
      {isLoading ? <Preloader /> : <MoviesList list={movies} />}
    </main>
  );
}
