import Card from '@components/Card/Card';
import CardList from '@components/Card/CardList';
import Heading from '@components/Heading/Heading';
import Seo from '@components/Seo/Seo';
import { ITVShow } from '@type/tv';
import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

export default function TvShows({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <Seo title='Popular TV Shows' />
      <Heading style={{ marginTop: '3rem' }}>
        Most Popular TV show Today
      </Heading>
      <CardList style={{ width: '100%' }}>
        {results.map(({ id, name, overview, poster_path, first_air_date }) => {
          return (
            <Card
              key={id}
              title={name}
              overview={overview}
              src={poster_path}
              releaseData={first_air_date}
              mediaType={router.pathname.slice(1)}
              contentId={id}
            />
          );
        })}
      </CardList>
    </>
  );
}

export const getServerSideProps = async () => {
  const { results }: { results: ITVShow[] } = await (
    await fetch(`http://localhost:3000/api/tv/popular`)
  ).json();

  return {
    props: { results },
  };
};
