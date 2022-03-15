import { InferGetServerSidePropsType } from 'next';
import { IPerson, ITVShow, IMovie } from '@type/index';
import Seo from '@components/Seo/Seo';
import Nav from '@components/Nav/Nav';
import Heading from '@components/Heading/Heading';
import Poster from '@components/Poster/Poster';
import TrendingPosters from '@layouts/TrendingPosters';

export type ResultType = IPerson & IMovie & ITVShow;

export const items = [
  {
    text: 'all',
    url: 'trending',
  },
  {
    text: 'movie',
    url: 'trending/movie',
  },
  {
    text: 'tv',
    url: 'trending/tv',
  },
  {
    text: 'person',
    url: 'trending/person',
  },
];

export default function Trend({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(results);

  return (
    <>
      <Seo title='Trending' />
      <Nav items={items} />
      <Heading>Trending: All</Heading>
      <TrendingPosters>
        {results.map(({ id, poster_path, name, title, vote_average }) => (
          <Poster
            key={id}
            src={poster_path}
            title={name || title}
            vote={vote_average}
          />
        ))}
      </TrendingPosters>
    </>
  );
}

const BASE_URL = 'http://localhost:3000/api';

export const getServerSideProps = async () => {
  const { results }: { results: ResultType[] } = await (
    await fetch(`${BASE_URL}/trending/all`)
  ).json();

  return {
    props: { results },
  };
};
