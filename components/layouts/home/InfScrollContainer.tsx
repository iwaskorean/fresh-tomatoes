import { useState } from 'react';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import CardList from '@components/Card/CardList';
import Card from '@components/Card/Card';
import { IMovie } from '@type/index';
import styled from '@emotion/styled';

export default function InfScrollContainer() {
  const [pageNumber, setPageNumber] = useState(1);

  const { list, loading, error, lastElementRef } = useInfiniteScroll<IMovie>(
    'movie/top_rated',
    pageNumber,
    setPageNumber
  );

  return (
    <Wrapper>
      {loading && <Loading>Loading ...</Loading>}
      {error && <Error>Error ...</Error>}
      <CardList>
        {list?.map(
          ({ id, title, overview, release_date, poster_path }, i: number) => (
            <Card
              key={id}
              contentId={id}
              mediaType={'movie'}
              title={title}
              overview={overview}
              src={poster_path}
              releaseData={release_date}
              innerRef={i === list.length - 1 ? lastElementRef : undefined}
            />
          )
        )}
      </CardList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-bottom: 2rem;
`;

const Loading = styled.h1`
  width: 100%;
  text-align: center;
  color: var(--grayLight4);
`;

const Error = styled.h1`
  width: 100%;
  text-align: center;
  color: var(--red);
`;
