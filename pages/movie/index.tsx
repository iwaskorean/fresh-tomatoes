import { InferGetStaticPropsType } from 'next';
import { IMovie } from '@type/movie';
import Seo from '@layouts/app/Seo/Seo';
import MoviePageLayout from '@layouts/movie';

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
  const { results }: { results: IMovie[] } = await (
    await fetch(`${process.env.BASE_URL}/movies/popular`)
  ).json();

  return {
    props: { results },
    revalidate: 60 * 60 * 24,
  };
};
