import React, { useState } from "react";
import { Img } from "../shared";
import axios from "../../api/axios";
import { useQuery } from "@tanstack/react-query";

const base_url = "http://image.tmdb.org/t/p/original/";

const Row: React.FC<{
  movieTitle: string;
  fetchUrl: string;
  isLargeRow?: any;
}> = (props) => {
  const { movieTitle, fetchUrl, isLargeRow } = props;

  const queryData = useQuery([movieTitle], async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
    // console.log(response.data.results);
    return response;
  });

  /* useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); */

  const [movies, setMovies] = useState<any>([]);
  return (
    <div className="row">
      <h3>{movieTitle}</h3>
      <div className="row__posters">
        {queryData.isLoading ? (
          <p className="row__poster">Loading...</p>
        ) : (
          movies.map((movie: any, index: number) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default Row;
