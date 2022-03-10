import { useEffect, useState } from 'react';
import CardList from '@components/Card/CardList';
import Heading from '@components/Heading/Heading';
import { IMovie } from '@type/index';
import styled from '@emotion/styled';
import Card from '@components/Card/Card';

export default function Cards() {
  const [items, setItems] = useState<IMovie[]>();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then(({ results }) => {
        setItems(results);
      });
  }, []);

  return (
    <Wrapper>
      <Heading>Top Rated Movies</Heading>
      <CardList>
        {items?.map(({ id, title, overview, poster_path, release_date }) => (
          <Card
            key={id}
            title={title}
            overview={overview}
            src={poster_path}
            releaseData={release_date}
          />
        ))}
      </CardList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin: 2rem 0;
`;
