import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Seo from '@components/Seo/Seo';
import Headline from '@layouts/Headline';
import {
  IPeopleResponse,
  IArticleResponse,
  IUpcomingMovie,
  IMovieResponse,
} from '@type/index';
import Upcoming from '@layouts/Upcoming';
import Lists from '@layouts/Lists';
import Cards from '@layouts/Cards';

export default function Home({
  articles,
  people,
  upcomingMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo title='Home' />
      <Headline articles={articles} people={people} />
      <Upcoming upcomingMovies={upcomingMovies} />
      <Lists />
      <Cards />
    </>
  );
}

const BASE_URL = 'http://localhost:3000/api';

export const getServerSideProps: GetServerSideProps = async () => {
  const articles: IArticleResponse = await (
    await fetch(`${BASE_URL}/reviews`)
  ).json();
  const people: IPeopleResponse = await (
    await fetch(`${BASE_URL}/people`)
  ).json();
  const upcomingMovies: IMovieResponse<IUpcomingMovie> = await (
    await fetch(`${BASE_URL}/movies/upcoming`)
  ).json();
  const rand = Math.floor(Math.random() * 18);

  return {
    props: {
      articles: articles.results.slice(1, 5),
      people: people.results.slice(rand, rand + 2),
      upcomingMovies: upcomingMovies.results,
    },
  };
};
