import { InferGetServerSidePropsType } from 'next';
import Heading from '@components/Heading/Heading';
import { IMovie } from '@type/movie';
import Card from '@components/Card/Card';
import CardList from '@components/Card/CardList';

export default function Movies({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Heading style={{ marginTop: '3rem' }}>Most Popular Movies Today</Heading>
      <CardList style={{ width: '100%' }}>
        {results.map(({ id, title, overview, poster_path, release_date }) => {
          return (
            <Card
              key={id}
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
    await fetch(`http://localhost:3000/api/movies/popular`)
  ).json();

  return {
    props: { results },
  };
};
