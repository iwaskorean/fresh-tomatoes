import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import TvShowDetailPageLayout from '@layouts/tv/TvShowDetail';
import { ITVShowDetail } from '@type/tv';
import Seo from '@layouts/app/Seo/Seo';

export default function TvShowDetail({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    result && (
      <>
        <Seo title={`${result.name} | TV Show`} />
        <TvShowDetailPageLayout result={result} />
      </>
    )
  );
}

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const id = params?.id;
  const response = await fetch(`${process.env.BASE_URL}/tv/${id}`);
  if (response.status === 404) {
    return {
      notFound: true,
      props: {},
    };
  }

  const result: ITVShowDetail = await response.json();

  return {
    props: { result },
  };
};
