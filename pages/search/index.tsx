import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Card from '@components/Card/Card';
import CardList from '@components/Card/CardList';
import { IMovie } from '@type/movie';
import { ITVShow } from '@type/tv';
import Image from 'next/image';
import TippedPopcornImage from '@assets/images/tipped-popcorn.svg';
import styled from '@emotion/styled';

export default function Search({
  results,
  mediaType,
  term,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {!results.length && (
        <>
          <Alert>
            <Image src={TippedPopcornImage} alt={''} width={100} height={100} />
            <Text>Sorry, no results found for {`"${term}"`}</Text>
          </Alert>
        </>
      )}
      <CardList style={{ width: '100%' }}>
        {results.map(
          ({
            id,
            title,
            name,
            poster_path,
            overview,
            release_date,
            first_air_date,
          }) => (
            <Card
              key={id}
              title={title || name}
              src={poster_path}
              overview={overview}
              mediaType={mediaType}
              releaseData={release_date || first_air_date}
              contentId={id}
            />
          )
        )}
      </CardList>
    </>
  );
}

const Alert = styled.section`
  padding: 35vh 0;
  display: flex;
  flex-direction: column;
`;

const Text = styled.h2``;

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
