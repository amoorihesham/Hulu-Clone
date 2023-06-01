const API_KEY = process.env.API_KEY;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  fetchTrending: {
    title: "Trending",
    url: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: "Action",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedey: {
    title: "Comedy",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorror: {
    title: "Horror",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomance: {
    title: "Romance",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv: {
    title: "TV Movies",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
