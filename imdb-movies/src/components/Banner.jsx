import React from "react";

function Banner() {
  const backdropUrl = "https://example.com/backdrop.jpg"; // Replace with the URL of the popular movie backdrop
  const movieName = "Popular Movie"; // Replace with the name of the popular movie

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url('${backdropUrl}')`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-gray-900/60 p-2">
        {movieName}
      </div>
    </div>
  );
}

export default Banner;