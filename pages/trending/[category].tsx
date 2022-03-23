import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { items, ResultType } from '.';
import Seo from '@layouts/app/Seo/Seo';
import Nav from '@components/Nav/Nav';
import Heading from '@components/Heading/Heading';
import Poster from '@components/Poster/Poster';
import Posters from '@layouts/Posters';

export default function Trending({
  results,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticPaths = async () => {
  const trendings = ['tv', 'person', 'movie'];

  const paths = trendings.map((trending) => {
    return {
      params: {
        category: trending,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const category = params?.category ?? '';

  const { results }: { results: ResultType[] } = await (
    await fetch(`${process.env.BASE_URL}/trending/${category}`)
  ).json();

  return {
    props: { results, category },
  };
};
