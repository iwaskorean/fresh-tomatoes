import { InferGetStaticPropsType } from 'next';
import Seo from '@layouts/app/Seo/Seo';
import TvPageLayout from '@layouts/tv';
import { ITVShow } from '@type/tv';

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
  const { results }: { results: ITVShow[] } = await (
    await fetch(`${process.env.BASE_URL}/tv/popular`)
  ).json();

  return {
    props: { results },
    revalidate: 60 * 60 * 24,
  };
};
