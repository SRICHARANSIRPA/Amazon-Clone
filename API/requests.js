const API_KEY = "14d0b75df89f4895013132ad5375b957";

export default [
  {
    title: "NETFLIX ORIGINALS",
    path: `discover/movie?api_key=${API_KEY}&language=en-US`,
    isOriginal: true,
  },
  {
    title: "TRENDING NOW",
    path: `trending/all/week?api_key=${API_KEY}`,
  },
  {
    title: "TOP RATED",
    path: `movie/top_rated?api_key=${API_KEY}&&language=en-US`,
  },
  {
    title: "ACTION MOVIES",
    path: `movie/top_rated?api_key=${API_KEY}&&with_genres=28`,
  },
  {
    title: "COMEDY MOVIES",
    path: `movie/top_rated?api_key=${API_KEY}&&with_genres=35`,
  },
  {
    title: "HORROR MOVIES",
    path: `movie/top_rated?api_key=${API_KEY}&&with_genres=27`,
  },
];
