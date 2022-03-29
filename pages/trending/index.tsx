import { InferGetStaticPropsType } from 'next';
import Seo from '@layouts/app/Seo/Seo';
import TrendingPageLayout from '@layouts/trending';
import { IPerson, ITVShow, IMovie, IResponse } from '@type/index';
import { typedFetch } from '@utils/typedFetch';

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
  const { results } = await typedFetch<IResponse<ResultType>>(
    `${process.env.BASE_URL}/trending/all`
  );

  return {
    props: { results },
    revalidate: 60 * 60 * 24,
  };
};
