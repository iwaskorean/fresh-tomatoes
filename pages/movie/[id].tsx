import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { IMovieDetail } from '@type/movie';
import Seo from '@layouts/app/Seo/Seo';
import MovieDetailPageLayout from '@layouts/movie/MovieDetail';

export default function MovieDetail({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    result && (
      <>
        <Seo title={`${result.title} | Movie`} />
        <MovieDetailPageLayout result={result} />
      </>
    )
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
