const API_KEY = `f1965f958428a4147d48da2344c983c4`;

const requests = [
  {
    title: "Trending Now",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Netflix Originals",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romance Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Documentries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];
export default requests;
