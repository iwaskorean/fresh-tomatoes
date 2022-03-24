import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { IMovie } from '@type/movie';
import { ITVShow } from '@type/tv';
import Seo from '@layouts/app/Seo/Seo';
import SearchPageLayout from '@layouts/search';

export default function Search({
  results,
  mediaType,
  term,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Seo title={`${term} | ${mediaType} | Fresh Tomatoes`} />
      <SearchPageLayout results={results} mediaType={mediaType} term={term} />
    </>
  );
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { mediaType, term } = query;

  const response = await fetch(
    `${process.env.BASE_URL}/search/${mediaType}/${term}`
  );

  const { results }: { results: (ITVShow & IMovie)[] } = await response.json();

  return {
    props: { results, mediaType, term },
  };
};
