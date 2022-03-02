import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Seo from '@components/Seo';
import Banner from '@components/elements/Banner/Banner';
import Headline from '@components/layouts/Headline';
import Carousel from '@components/elements/Carousel/Carousel';
import { IArticleResponse, IPeopleResponse } from '@type/response';
import { IPerson } from '@type/person';
import { IArticle } from '@type/article';

export default function Home({
  articles,
  people,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo title='Home' />
      <Headline>
        <Carousel>
          {articles.map(
            (
              { multimedia, display_title, headline, summary_short }: IArticle,
              i: number
            ) => (
              <Banner
                key={i}
                src={multimedia.src}
                alt={display_title}
                title={headline}
                subTitle={[summary_short]}
              />
            )
          )}
        </Carousel>

        {people.map(({ id, profile_path, name, known_for }: IPerson) => (
          <Banner
            key={id}
            src={profile_path}
            alt={name}
            title={name}
            subTitle={known_for
              .map(({ title }) => title)
              .filter((title) => title)}
          />
        ))}
      </Headline>
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
      articles: articles.results.slice(1, 8),
      people: people.results.slice(rand, rand + 2),
    },
  };
};
