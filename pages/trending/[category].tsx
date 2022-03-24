import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Seo from '@layouts/app/Seo/Seo';
import MediaTypeTrendingPageLayout from '@layouts/trending/MediaType';
import { ResultType } from '.';

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
      <MediaTypeTrendingPageLayout results={results} category={category} />
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
    revalidate: 60 * 60 * 24,
  };
};
