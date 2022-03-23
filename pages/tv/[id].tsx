import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Heading from '@components/Heading/Heading';
import Detail from '@layouts/Detail';
import { ITVShowDetail } from '@type/tv';
import Seo from '@components/Seo/Seo';

export default function TvShowDetail({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo title={`${result?.name} | TV Show`} />
      <Heading style={{ marginTop: '3rem' }}>TV Show Details</Heading>
      <Detail
        title={result?.name}
        overview={result?.overview}
        poster={result?.poster_path}
        releaseDate={result?.first_air_date}
        runningTime={result?.episode_run_time[0]}
        homepage={result?.homepage}
        genres={result?.genres}
        tagline={result?.tagline}
        vote={result?.vote_average}
      />
    </>
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
