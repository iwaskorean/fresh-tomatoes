import { useCallback, useRef, useState } from 'react';
import CardList from '@components/Card/CardList';
import Heading from '@components/Heading/Heading';
import { IMovie } from '@type/index';
import styled from '@emotion/styled';
import Card from '@components/Card/Card';
import useFetch from 'hooks/useFetch';

export default function Cards() {
  const [pageNumber, setPageNumber] = useState(1);

  const { list, loading, error, hasMore } = useFetch<IMovie>(
    'movie/top_rated',
    pageNumber
  );

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLElement) => {
      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <Wrapper>
      <Heading>Top Rated Movies</Heading>
      {loading && <Loading>Loading ...</Loading>}
      {error && <Error>Error ...</Error>}
      <CardList>
        {list?.map(
          ({ id, title, overview, release_date, poster_path }, i: number) => {
            if (i === list.length - 1) {
              return (
                <Card
                  key={id}
                  title={title}
                  overview={overview}
                  src={poster_path}
                  releaseData={release_date}
                  innerRef={lastElementRef}
                />
              );
            } else {
              return (
                <Card
                  key={id}
                  title={title}
                  overview={overview}
                  src={poster_path}
                  releaseData={release_date}
                />
              );
            }
          }
        )}
      </CardList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: 2rem 0;
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
