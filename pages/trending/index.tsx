import { InferGetStaticPropsType } from 'next';
import { IPerson, ITVShow, IMovie } from '@type/index';
import Seo from '@layouts/app/Seo/Seo';
import TrendingPageLayout from '@layouts/trending';

export type ResultType = IPerson & IMovie & ITVShow;

export default function Trend({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title='Trending' />
      <TrendingPageLayout results={results} />
    </>
  );
}

export const getStaticProps = async () => {
  const { results }: { results: ResultType[] } = await (
    await fetch(`${process.env.BASE_URL}/trending/all`)
  ).json();

  return {
    props: { results },
    revalidate: 60 * 60 * 24,
  };
};
