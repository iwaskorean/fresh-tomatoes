import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { IMovieDetail } from '@type/movie';
import Detail from '@layouts/Detail';
import Heading from '@components/Heading/Heading';
import Seo from '@layouts/app/Seo/Seo';

export default function MovieDetail({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo title={`${result?.title} | Movie`} />
      <Heading style={{ marginTop: '3rem' }}>Movie Details</Heading>
      <Detail
        title={result?.title}
        overview={result?.overview}
        poster={result?.poster_path}
        releaseDate={result?.release_date}
        runningTime={result?.runtime}
        genres={result?.genres}
        homepage={result?.homepage}
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
  const response = await fetch(`${process.env.BASE_URL}/movies/${id}`);

  if (response.status === 404) {
    return {
      notFound: true,
      props: {},
    };
  }

  const result: IMovieDetail = await response.json();

  return {
    props: { result },
  };
};
