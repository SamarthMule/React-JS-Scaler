import MovieCard from "./MovieCard";
import { useEffect, useState, React } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ handleAddToWatchList, handleRemoveFromWatchList, watchList }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page === 1) setPage(1);
    else setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [page]);


  return (
    <div className="p-5">
      <div className="text-2xl m-2 font-bold text-center mb-5">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>
      <Pagination handlePrev={handlePrev} handleNext={handleNext} page={page} />
    </div>
  );
}

export default Movies;
