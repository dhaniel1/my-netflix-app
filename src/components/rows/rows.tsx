import React, { useEffect, useState } from "react";
import { Img } from "../shared";
import axios from "../../api/axios";

const base_url = "http://image.tmdb.org/t/p/original/";

const Row: React.FC<{
  movieTitle: string;
  fetchUrl: string;
  isLargeRow?: any;
}> = (props) => {
  const { movieTitle, fetchUrl, isLargeRow } = props;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const [movies, setMovies] = useState<any>([]);
  return (
    <div className="row">
      <h2>{movieTitle}</h2>
      <div className="row__posters">
        {movies.map((movie: any) => {
          return (
            <Img
              alt={movie.name}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarger"}`}
              src={`${base_url}${
                isLargeRow ? movie.backdrop_path : movie.poster_path
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
