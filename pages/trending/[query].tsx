import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { items, ResultType } from '.';
import Seo from '@components/Seo/Seo';
import Nav from '@components/Nav/Nav';
import Heading from '@components/Heading/Heading';
import Poster from '@components/Poster/Poster';
import TrendingPosters from '@layouts/TrendingPosters';

export default function Trending({
  query,
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo
        title={
          query
            ? `${query[0].toUpperCase() + query?.slice(1, query.length)} Trend`
            : 'Trending'
        }
      />
      <Nav items={items} />
      <Heading>Trending: {query || ''}</Heading>
      <TrendingPosters>
        {results?.map(
          ({ id, poster_path, name, title, vote_average, profile_path }) => (
            <Poster
              key={id}
              src={poster_path || profile_path}
              title={name || title}
              vote={vote_average}
            />
          )
        )}
      </TrendingPosters>
    </>
  );
}

const BASE_URL = 'http://localhost:3000/api';

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const trending = ['tv', 'person', 'movie'];
  const query = params?.query as string;

  if (!trending.includes(query)) {
    return {
      redirect: {
        permanent: true,
        destination: '/trending',
      },
      props: {},
    };
  }

  const { results }: { results: ResultType[] } = await (
    await fetch(`${BASE_URL}/trending/${query}`)
  ).json();

  return {
    props: { results, query },
  };
};