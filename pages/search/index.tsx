import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Seo from '@layouts/app/Seo/Seo';
import SearchPageLayout from '@layouts/search';
import { typedFetch } from '@utils/typedFetch';
import { IMovie, ITVShow, IResponse } from '@type/index';

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

  const { results } = await typedFetch<IResponse<ITVShow & IMovie>>(
    `${process.env.BASE_URL}/search/${mediaType}/${term}`
  );

  return {
    props: { results, mediaType, term },
  };
};
