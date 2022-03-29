import { InferGetStaticPropsType } from 'next';
import Seo from '@layouts/app/Seo/Seo';
import MoviePageLayout from '@layouts/movie';
import { typedFetch } from '@utils/typedFetch';
import { IMovie, IResponse } from '@type/index';

export default function Movies({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title='Popular Movies' />
      <MoviePageLayout results={results} />
    </>
  );
}

export const getStaticProps = async () => {
  const { results } = await typedFetch<IResponse<IMovie>>(
    `${process.env.BASE_URL}/movies/popular`
  );

  return {
    props: { results },
    revalidate: 60 * 60 * 24,
  };
};
