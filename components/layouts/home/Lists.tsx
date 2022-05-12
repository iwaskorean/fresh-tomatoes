import { IMovie, ITVShow } from '@type/index';
import useFetch from 'hooks/useFetch';
import List from '@components/List/List';
import Heading from '@components/Heading/Heading';
import styled from '@emotion/styled';
import { mobile } from '@utils/responsive';

export default function Lists() {
  const movieFetchResults = useFetch<IMovie>('movie/now_playing');
  const showFetchResults = useFetch<ITVShow>('tv/on_the_air');

  const showAlertMessage = (loading: boolean, error: unknown) => {
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
        {showAlertMessage(movieFetchResults.loading, movieFetchResults.error)}
        <List
          items={movieFetchResults.list
            .slice(0, 15)
            .map(({ id, title, vote_average }) => {
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
        {showAlertMessage(showFetchResults.loading, showFetchResults.error)}
        <List
          items={showFetchResults.list
            .slice(0, 15)
            .map(({ id, name, vote_average }) => {
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
  ${mobile({ flexWrap: 'wrap' })}
`;

const Container = styled.div`
  width: 50%;
  & + & {
    border-left: 0.15rem solid var(--grayLight2);
  }
  ${mobile({ width: '100%', marginTop: '1rem' })}
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
