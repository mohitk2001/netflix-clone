import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
//   const [TrailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const rqst = await axios.get(request.fetchNetflixOriginals);
      // console.log(rqst.data.results)
      setMovie(
        rqst.data.results[
          Math.floor(Math.random() * rqst.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };
//   const Play = (movie) => {
//     console.log(movie);
//     if (TrailerUrl) {
//         setTrailerUrl("");
//       } else {
//         console.log(movie);
//         console.log(movie?.name);
//         movieTrailer(movie?.name || movie?.title || "")
//           .then((url) => {
//             console.log(url);
//             //https://www.youtube.com/watch?v=-cMqr9HpZ- we need after ? = v......
//             const urlParams = new URLSearchParams(new URL(url).search);
//             setTrailerUrl(urlParams.get("v"));
//           })
//           .catch((e) => {
//             console.log(e);
//           });
//       }
//   };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
          {/* just like if else statement and ? handling erro*/}
        </h1>
        <div className="banner_buttons">
          {/* <button className="banner_button">
            Play
          </button> */}
          <button className="banner_button">My List</button>
        </div>
        <h1 className="bannner_description">
          {truncate(movie?.overview, 150)}
          {movie?.overview}
        </h1>
      </div>
     
      <div className="banner_fadebottom" />
      
    </header>
  );
}

export default Banner;
