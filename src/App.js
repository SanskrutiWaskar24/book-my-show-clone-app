import "./App.css";

// Routers
import { Routes, Route } from "react-router-dom";
//api
import axios from "axios";


// React Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// Pages
import PlayPage from "./pages/Play.page";
import MoviePage from "./pages/Movie.page";
import HomePage from "./pages/Home.page";

import MovieProvider from "./context/MovieContext"; 

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.params = {}
axios.defaults.params["api_key"] = "0e26e1800896f917e962921a223a88db"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}
export default App;
