import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(movieId) {
  return http.get(apiEndPoint + "/" + movieId);
}

export function deleteMovies(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndPoint + "/" + movie._id, body);
  }

  return http.post(apiEndPoint, movie);
}
