/** @type {import('next').NextConfig} */

const BASE_URL_TMDB = 'https://api.themoviedb.org/3';
const API_KEY_TMDB = process.env.API_KEY;
const BASE_URL_NYT = 'https://api.nytimes.com/svc';
const API_KEY_NYT = process.env.API_KEY_NYT;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/before-path',
        destination: '/after-path',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies/:query',
        destination: `${BASE_URL_TMDB}/movie/:query?api_key=${API_KEY_TMDB}&language=en-US&page=1`,
      },
      {
        source: '/api/people',
        destination: `${BASE_URL_TMDB}/person/popular?api_key=${API_KEY_TMDB}&language=en-US&page=1`,
      },
      {
        source: '/api/reviews',
        destination: `${BASE_URL_NYT}/movies/v2/reviews/search.json?api-key=${API_KEY_NYT}`,
      },
    ];
  },
};

module.exports = nextConfig;
