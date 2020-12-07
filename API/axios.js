import axios from "axios";
const baseURL = "https://api.themoviedb.org/3/";
export const imageBaseURL = "https://image.tmdb.org/t/p/original/";
export default axios.create({
  baseURL: baseURL,
});
