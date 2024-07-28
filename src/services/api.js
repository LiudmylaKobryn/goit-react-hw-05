import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Nzc5YTc5ZmVlMTM1ZjcwYTk0ZTdkYzZkNTQ3NWNhZSIsIm5iZiI6MTcyMjE2NjgyMS40Mzg1Niwic3ViIjoiNjZhNjJkMTg2MDkwMmYyZDNiZmM0ZjIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.qjSH1hJIr3B5WAy-uaYEbzDfKrpDzSe3imXYHMvSe90";

export const fetchDayMovies = async () => {
  const responce = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  return responce.data.results;
};

export const fetchWeekMovies = async () => {
  const responce = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  return responce.data.results;
};

export const fetchMovieById = async (id) => {
  const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return responce.data;
};

export const fetchMovieCast = async (id) => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  return responce.data;
};
