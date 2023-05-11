import React from "react";
import { Navbar } from "../components";
import { Banner } from "../components/banner";
import Row from "../components/rows/rows";
import requests from "../api/requests";

const HomeScreen = () => {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        <Row
          movieTitle={"Netflix Originals"}
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row movieTitle="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row movieTitle="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row movieTitle="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row movieTitle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row movieTitle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row
          movieTitle="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row movieTitle="Documentries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
};

export default HomeScreen;
