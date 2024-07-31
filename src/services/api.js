import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Nzc5YTc5ZmVlMTM1ZjcwYTk0ZTdkYzZkNTQ3NWNhZSIsIm5iZiI6MTcyMjE2NjgyMS40Mzg1Niwic3ViIjoiNjZhNjJkMTg2MDkwMmYyZDNiZmM0ZjIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qjSH1hJIr3B5WAy-uaYEbzDfKrpDzSe3imXYHMvSe90";

const getTrendingMovies = async () => {
  const responce = await axios.get("trending/movie/day", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return responce.data.results;
};

const getFilerMovies = async (query) => {
  const responce = await axios.get(`search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return responce.data.results;
};

const getMovieById = async (movieId) => {
  const responce = await axios.get(`movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return responce.data;
};

const getMovieVideos = async (id) => {
  const response = await axios.get(`/movie/${id}/videos`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.cast;
};

const getMovieReview = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};

export {
  getTrendingMovies,
  getFilerMovies,
  getMovieById,
  getMovieVideos,
  getMovieCast,
  getMovieReview,
};
