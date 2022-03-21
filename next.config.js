/** @type {import('next').NextConfig} */

const BASE_URL_TMDB = 'https://api.themoviedb.org/3';
const API_KEY_TMDB = process.env.API_KEY;
const BASE_URL_NYT = 'https://api.nytimes.com/svc';
const API_KEY_NYT = process.env.API_KEY_NYT;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  async rewrites() {
    return [
      {
        source: '/api/movies/:category',
        destination: `${BASE_URL_TMDB}/movie/:category?api_key=${API_KEY_TMDB}&language=en-US&page=1`,
      },
      {
        source: '/api/people',
        destination: `${BASE_URL_TMDB}/person/popular?api_key=${API_KEY_TMDB}&language=en-US&page=1`,
      },
      {
        source: '/api/tv/:category',
        destination: `${BASE_URL_TMDB}/tv/:category?api_key=${API_KEY_TMDB}&language=en-US&page=1`,
      },
      {
        source: '/api/reviews',
        destination: `${BASE_URL_NYT}/movies/v2/reviews/search.json?api-key=${API_KEY_NYT}`,
      },
      {
        source: '/api/trending/:category',
        destination: `${BASE_URL_TMDB}/trending/:category/day?api_key=${API_KEY_TMDB}`,
      },
      {
        source: '/api/search/:mediaType/:query',
        destination: `${BASE_URL_TMDB}/search/:mediaType?api_key=${API_KEY_TMDB}&language=en-US&query=:query&page=1&include_adult=false`,
      },
    ];
  },
};

module.exports = nextConfig;
