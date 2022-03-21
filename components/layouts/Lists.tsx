import { useEffect, useRef, useState } from 'react';
import { IMovie, ITVShow } from '@type/index';
import { getTomatoMeter } from '@utils/index';
import Heading from '@components/Heading/Heading';
import Link from 'next/link';
import styled from '@emotion/styled';
import { breakpoints } from 'GlobalStyle';

export default function Lists() {
  const [listItem, setListItem] =
    useState<{ movies: IMovie[]; shows: ITVShow[] }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const baseUrl = 'https://api.themoviedb.org/3';

    const fetchData = async () => {
      const playingMoviesRes = await (
        await fetch(
          `${baseUrl}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
        )
      )
        .json()
        .catch((error) => {
          // setLoading(false);
          console.log(error);
          setError(true);
        });
      const playingshowsRes = await (
        await fetch(
          `${baseUrl}/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
        )
      )
        .json()
        .catch((error) => {
          setLoading(false);
          console.log(error);
          setError(true);
        });

      setListItem({
        movies: playingMoviesRes.results.slice(0, 10),
        shows: playingshowsRes.results.slice(0, 10),
      });
    };

    fetchData();
    setLoading(false);
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loading>Loading ...</Loading>
      ) : (
        <>
          <Container>
            <Heading>Movies in Theater Now</Heading>
            <List>
              {listItem?.movies.map(({ id, title, vote_average }) => (
                <Item key={id}>
                  <Link href={`/movie/${id}`} passHref={true}>
                    <Title>{title}</Title>
                  </Link>
                  <Box>
                    <TomatoMeter>{getTomatoMeter(vote_average)}</TomatoMeter>
                    <Link href={`/movie/${id}`} passHref={true}>
                      <VoteAverage vote={vote_average * 10}>
                        {vote_average ? vote_average * 10 + '%' : '--'}
                      </VoteAverage>
                    </Link>
                  </Box>
                </Item>
              ))}
            </List>
          </Container>
          <Container>
            <Heading>TV Shows on the air</Heading>
            <List>
              {listItem?.shows.map(({ id, name, vote_average }) => (
                <Item key={id}>
                  <Link href={`/tv/${id}`} passHref={true}>
                    <Title>{name}</Title>
                  </Link>
                  <Box>
                    <TomatoMeter>{getTomatoMeter(vote_average)}</TomatoMeter>
                    <Link href={`/tv/${id}`} passHref={true}>
                      <VoteAverage vote={vote_average * 10}>
                        {vote_average ? vote_average * 10 + '%' : '--'}
                      </VoteAverage>
                    </Link>
                  </Box>
                </Item>
              ))}
            </List>
          </Container>
        </>
      )}

      {loading && <Loading>Loading ...</Loading>}
      {error && <Error>Error ...</Error>}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  @media (max-width: ${breakpoints.mobile}) {
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  width: 50%;
  & + & {
    border-left: 0.15rem solid var(--grayLight2);
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const List = styled.ul`
  width: 100%;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
`;

const Item = styled.li`
  width: 95%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  margin: 0 auto;
  border-bottom: 0.1rem solid var(--grayLight2);

  &:hover {
    a {
      color: var(--blueHover);
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.a`
  text-decoration: none;
  color: var(--black);
  font-size: 1rem;
`;

const TomatoMeter = styled.span`
  width: 1.3rem;
`;

const VoteAverage = styled.a<{ vote: number }>`
  font-weight: var(--font-bold);
  font-size: 1rem;
  text-decoration: none;
  color: var(--black);
  ${({ vote }) =>
    !vote &&
    `
  color: var(--grayLight4);
  letter-spacing: 0.1rem;
`};
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
