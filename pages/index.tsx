import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Seo from '@components/Seo/Seo';
import Headline from '@layouts/Headline';
import MultiCarousel from '@components/Carousel/MultiCarousel';
import Poster from '@components/Poster/Poster';
import {
  IPeopleResponse,
  IArticleResponse,
  IUpcomingMovie,
  IMovieResponse,
} from '@type/index';

export default function Home({
  articles,
  people,
  upcomingMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo title='Home' />
      <Headline articles={articles} people={people} />
      <div style={{ width: 'var(--layout-width)' }}>
        <MultiCarousel>
          {upcomingMovies.map(
            ({ id, poster_path, title, vote_average }: IUpcomingMovie) => (
              <Poster
                key={id}
                src={poster_path}
                title={title}
                vote={vote_average}
              />
            )
          )}
        </MultiCarousel>
      </div>
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
  const rand = Math.floor(Math.random() * 18);
  const upcomingMovies: IMovieResponse<IUpcomingMovie> = await (
    await fetch(`${BASE_URL}/movies/upcoming`)
  ).json();

  return {
    props: {
      articles: articles.results.slice(1, 5),
      people: people.results.slice(rand, rand + 2),
      upcomingMovies: upcomingMovies.results,
    },
  };
};
