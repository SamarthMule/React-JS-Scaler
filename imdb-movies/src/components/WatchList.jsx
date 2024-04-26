import { React, useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import genreids from "../Utility/genres";

function WatchList({ watchList, handleRemoveFromWatchList, setWatchList }) {
  const [search, setSearch] = useState("");
  const [genresList, setGenresList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncrease = () => {
    let sortedincreasing = watchList.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchList([...sortedincreasing]);
  };
  let sortDecrease = () => {
    let sortedecreasing = watchList.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchList([...sortedecreasing]);
  };
  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    temp = [...new Set(temp)];
    setGenresList(["All Genres", ...temp]);
    console.log(genresList);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-4">
        {genresList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre === genre
                  ? "bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-semibold cursor-pointer"
                  : "bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl cursor-pointer font-semibold"
              }>
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          className="w-1/3 h-[3rem] bg-gray-200 outline-none px-4 text-xl font-semibold"
          placeholder="Search Movies"
        />
      </div>
      <div className="border border-gray-200 m-5 rounded-lg overflow-hidden">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-3 text-gray-800 bg-gray-200">
            <tr>
              <th className="text-left px-5 py-3">Name</th>
              <th className="flex gap-3 justify-center">
                <div onClick={sortIncrease} className="p-2">
                  <i className="fa fa-arrow-up" />
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecrease} className="p-2">
                  <i className="fa fa-arrow-down" />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movie) => {
              if (currentGenre === "All Genres") {
                return true;
              } else {
                return genreids[movie.genre_ids[0]] === currentGenre;
              }
            }).filter((movie) => {
                return (
                  movie.original_title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  movie.overview.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((movie, index) => {
                return (
                  <tr className="border-b-2" key={index}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-auto"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.original_title}
                      />
                      <div className="mx-10">{movie.original_title}</div>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{genreids[movie.genre_ids[0]]}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveFromWatchList(movie)}
                        className="font-bold text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
