import { InferGetStaticPropsType } from 'next';
import Seo from '@layouts/app/Seo/Seo';
import { IUpcomingMovie, IResponse, IPerson, IArticle } from '@type/index';
import HomeLayout from '@layouts/home';
import { typedFetch } from '@utils/typedFetch';

export default function Home({
  articles,
  people,
  upcomingMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title='Home' />
      <HomeLayout
        articles={articles}
        people={people}
        upcomingMovies={upcomingMovies}
      />
    </>
  );
}

export const getStaticProps = async () => {
  const articles = await typedFetch<IResponse<IArticle>>(
    `${process.env.BASE_URL}/reviews`
  );

  const people = await typedFetch<IResponse<IPerson>>(
    `${process.env.BASE_URL}/people`
  );
  const upcomingMovies = await typedFetch<IResponse<IUpcomingMovie>>(
    `${process.env.BASE_URL}/movies/upcoming`
  );
  const rand = Math.floor(Math.random() * 18);

  return {
    props: {
      articles: articles.results.slice(1, 5),
      people: people.results.slice(rand, rand + 2),
      upcomingMovies: upcomingMovies.results,
    },
    revalidate: 60 * 60 * 24,
  };
};
