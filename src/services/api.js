import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Nzc5YTc5ZmVlMTM1ZjcwYTk0ZTdkYzZkNTQ3NWNhZSIsIm5iZiI6MTcyMjE2NjgyMS40Mzg1Niwic3ViIjoiNjZhNjJkMTg2MDkwMmYyZDNiZmM0ZjIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qjSH1hJIr3B5WAy-uaYEbzDfKrpDzSe3imXYHMvSe90";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const fetchDayMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};

const fetchWeekMovies = async () => {
  const { data } = await axios.get(`trending/movie/week`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};

const fetchMovieById = async (id) => {
  const { data } = await axios.get(`movie/${id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data;
};

const fetchMovieCast = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data;
};

const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data;
};

const fetchMoviesByQuery = async (query) => {
  const { data } = await axios.get(`search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return data.results;
};

export {
  fetchDayMovies,
  fetchWeekMovies,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMoviesByQuery,
};
