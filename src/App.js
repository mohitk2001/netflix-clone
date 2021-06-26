import React from "react"
import './App.css';
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
     <Row title="Netflix Original" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
     <Row title="Top rated" fetchUrl={request.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
     <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
     <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
