import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
  };

  const handleRemoveFromWatchList = (movie) => {
    const filteredWatchList = watchList.filter((item) => item.id !== movie.id);
    setWatchList(filteredWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
  };
  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList watchList={watchList} handleRemoveFromWatchList={handleRemoveFromWatchList} setWatchList={setWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;