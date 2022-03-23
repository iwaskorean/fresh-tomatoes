import { useEffect, useState } from 'react';
import { IMovie, ITVShow } from '@type/index';
import Heading from '@components/Heading/Heading';
import { breakpoints } from 'GlobalStyle';
import List from '@components/List/List';
import styled from '@emotion/styled';

export default function Lists() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [playingMovies, setPlayingMovies] = useState<IMovie[]>([]);
  const [playingShows, setPlayingShows] = useState<ITVShow[]>([]);

  useEffect(() => {
    const baseUrl = 'https://api.themoviedb.org/3';

    const fetchData = async () => {
      setLoading(true);

      await fetch(
        `${baseUrl}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then(({ results }) => {
          setPlayingMovies(results.slice(0, 10));
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          setError(true);
        });

      await fetch(
        `${baseUrl}/tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then(({ results }) => {
          setPlayingShows(results.slice(0, 10));
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          setError(true);
        });
    };

    fetchData();
  }, []);

  const showAlertMessage = () => {
    return (
      <>
        {loading && <Loading>Loading ...</Loading>}
        {error && <Error>Could not fetch from api ...</Error>}
      </>
    );
  };

  return (
    <Wrapper>
      <Container>
        <Heading>Movies in Theater Now</Heading>
        {showAlertMessage()}
        <List
          items={playingMovies.map(({ id, title, vote_average }) => {
            return {
              contentId: id,
              text: title,
              voteAverage: vote_average,
              href: `/movie/${id}`,
            };
          })}
        />
      </Container>
      <Container>
        <Heading>TV Shows on the air</Heading>
        {showAlertMessage()}
        <List
          items={playingShows.map(({ id, name, vote_average }) => {
            return {
              contentId: id,
              text: name,
              voteAverage: vote_average,
              href: `/tv/${id}`,
            };
          })}
        />
      </Container>
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

const Loading = styled.h1`
  width: 100%;
  text-align: center;
  color: var(--grayLight4);
  font-size: 1rem;
`;

const Error = styled.h1`
  margin: 1rem;
  font-size: 1rem;
  text-align: center;
  color: var(--red);
`;
