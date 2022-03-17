import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { items, ResultType } from '.';
import Seo from '@components/Seo/Seo';
import Nav from '@components/Nav/Nav';
import Heading from '@components/Heading/Heading';
import Poster from '@components/Poster/Poster';
import Posters from '@layouts/Posters';

export default function Trending({
  results,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo
        title={
          category
            ? `Trending: ${
                category[0].toUpperCase() + category?.slice(1, category.length)
              }`
            : 'Trending'
        }
      />
      <Nav items={items} />
      <Heading>Trending: {category || ''}</Heading>
      <Posters>
        {results?.map(
          ({
            id,
            title,
            media_type,
            name,
            poster_path,
            profile_path,
            vote_average,
          }) => (
            <Poster
              key={id}
              src={profile_path || poster_path || '-'}
              title={name || title}
              vote={vote_average || 0}
              contentId={id}
              mediaType={media_type}
            />
          )
        )}
      </Posters>
    </>
  );
}

const BASE_URL = 'http://localhost:3000/api';

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const trending = ['tv', 'person', 'movie'];
  const category = params?.category as string;

  if (!trending.includes(category)) {
    return {
      redirect: {
        permanent: true,
        destination: '/trending',
      },
      props: {},
    };
  }

  const { results }: { results: ResultType[] } = await (
    await fetch(`${BASE_URL}/trending/${category}`)
  ).json();

  return {
    props: { results, category },
  };
};
