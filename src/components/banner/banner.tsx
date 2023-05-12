import React, { useEffect, useState } from "react";
import { Button, Img } from "../shared";
import axios from "../../api/axios";
import requests from "../../api/requests";
import { img, svg } from "../../assets";

const Banner = (props: IpropHeader) => {
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);
  function truncate(value: string, n: number) {
    return value?.length > n ? `${value.substring(0, n - 1)}...` : value;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `${
          movie.backdrop_path
            ? `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            : img.defaultbackground
        }"`,
      }}>
      <div className="banner__contents">
        <div className="banner__contentLeft">
          <h1 className="banner__title">
            {movie?.name || movie?.original_name}
          </h1>
          <div className="banner__description">
            {truncate(` ${movie.overview}`, 160)}
          </div>
          <div className="banner__buttons">
            <Button styles="rounded banner__button btnWhite" title="Play">
              <Img src={svg.playIcon} />
            </Button>
            <Button styles="rounded banner__button btnGrey" title="More Info">
              <Img src={svg.moreInfo} />
            </Button>
          </div>
        </div>
        <div className="banner__contentRight">
          <div>
            <Button styles="circleBtn ">
              <Img src={svg.restart} />
            </Button>
            <span>18+</span>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
