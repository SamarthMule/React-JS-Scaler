import React from "react";

function MovieCard({
  handleAddToWatchList,
  movie,
  handleRemoveFromWatchList,
  watchList,
}) {
  function doesContain(movie) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
      {doesContain(movie) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movie)}
          className="m-4 p-1 flex justify-center h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movie)}
          className="m-4 p-1 flex justify-center h-8 w-8 rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}
      <div className="text-white rounded-xl text-xl w-full p-2 text-center bg-gray-900/60">
        {movie.original_title}
      </div>
    </div>
  );
}

export default MovieCard;
