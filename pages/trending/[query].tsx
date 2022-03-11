import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Seo from '@components/Seo/Seo';

export default function Trending({
  query,
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo
        title={`${query[0].toUpperCase() + query.slice(1, query.length)} Trend`}
      />
      <h2>{query}</h2>
      {results.map((el: any, i: number) => (
        <h2 key={i}>{el.title || el.name}</h2>
      ))}
    </>
  );
}

const BASE_URL = 'http://localhost:3000/api';

export const getStaticPaths: GetStaticPaths = () => {
  const trendings = ['movie', 'tv', 'person'];
  const paths = trendings.map((trending) => {
    return {
      params: {
        query: trending,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const query = params?.query;
  const { results } = await (
    await fetch(`${BASE_URL}/trending/${query}`)
  ).json();

  return {
    props: { results, query },
  };
};
