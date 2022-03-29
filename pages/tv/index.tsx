import { InferGetStaticPropsType } from 'next';
import Seo from '@layouts/app/Seo/Seo';
import TvPageLayout from '@layouts/tv';
import { typedFetch } from '@utils/typedFetch';
import { IResponse, ITVShow } from '@type/index';

export default function TvShows({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title='Popular TV Shows' />
      <TvPageLayout results={results} />
    </>
  );
}

export const getStaticProps = async () => {
  const { results } = await typedFetch<IResponse<ITVShow>>(
    `${process.env.BASE_URL}/tv/popular`
  );

  return {
    props: { results },
    revalidate: 60 * 60 * 24,
  };
};
