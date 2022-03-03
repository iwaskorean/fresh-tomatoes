import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Seo from '@components/Seo/Seo';
import Headline from '@layouts/Headline';
import { IPeopleResponse, IArticleResponse } from '@type/index';

export default function Home({
  articles,
  people,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo title='Home' />
      <Headline articles={articles} people={people} />
    </>
  );
}

const BASE_URL = 'http://localhost:3000/api';

export const getServerSideProps: GetServerSideProps = async () => {
  const articles: IArticleResponse = await (
    await fetch(`${BASE_URL}/reviews`)
  ).json();
  const people: IPeopleResponse = await (
    await fetch(`${BASE_URL}/people`)
  ).json();
  const rand = Math.floor(Math.random() * 18);

  return {
    props: {
      articles: articles.results.slice(1, 5),
      people: people.results.slice(rand, rand + 2),
    },
  };
};
