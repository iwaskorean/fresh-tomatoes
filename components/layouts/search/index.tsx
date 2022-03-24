import { ITVShow, IMovie } from '@type/index';
import Image from 'next/image';
import TippedPopcornImage from '@assets/images/tipped-popcorn.svg';
import styled from '@emotion/styled';
import CardList from '@components/Card/CardList';
import Card from '@components/Card/Card';

interface SearchPageLayoutProps {
  results: (ITVShow & IMovie)[];
  mediaType: string | string[] | undefined;
  term: string | string[] | undefined;
}

export default function SearchPageLayout({
  results,
  mediaType,
  term,
}: SearchPageLayoutProps) {
  return (
    <>
      {!results.length && (
        <Alert>
          <Image src={TippedPopcornImage} alt={''} width={100} height={100} />
          <Text>Sorry, no results found for {`"${term}"`}</Text>
        </Alert>
      )}
      <CardList style={{ width: '100%' }}>
        {results.map((result) => (
          <Card
            key={result.id}
            title={result.title || result.name}
            src={result.poster_path}
            overview={result.overview}
            mediaType={mediaType}
            releaseData={result.release_date || result.first_air_date}
            contentId={result.id}
          />
        ))}
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
