import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Seo from '@components/Seo/Seo';

export default function Trend({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title='Trending' />
      <ul>
        <li>All</li>
        <li>movie</li>
        <li>tv</li>
        <li>people</li>
      </ul>

      {/* Have to Fix  */}
      {results.map((el: any) => (
        <h2 key={el}>{el.title}</h2>
      ))}
    </>
  );
}

const BASE_URL = 'http://localhost:3000/api';

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await (await fetch(`${BASE_URL}/trending/all`)).json();

  return {
    props: { results },
  };
};
