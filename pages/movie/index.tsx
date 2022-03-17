import { InferGetServerSidePropsType } from 'next';
import Heading from '@components/Heading/Heading';
import { IMovie } from '@type/movie';
import Card from '@components/Card/Card';
import CardList from '@components/Card/CardList';
import Seo from '@components/Seo/Seo';
import { useRouter } from 'next/router';

export default function Movies({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <Seo title='Popular Movies' />
      <Heading style={{ marginTop: '3rem' }}>Most Popular Movies Today</Heading>
      <CardList style={{ width: '100%' }}>
        {results.map(({ id, title, overview, poster_path, release_date }) => {
          return (
            <Card
              key={id}
              contentId={id}
              mediaType={router.pathname.slice(1)}
              title={title}
              overview={overview}
              src={poster_path}
              releaseData={release_date}
            />
          );
        })}
      </CardList>
    </>
  );
}

export const getServerSideProps = async () => {
  const { results }: { results: IMovie[] } = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/movies/popular`)
  ).json();

  return {
    props: { results },
  };
};
