import { HTMLAttributes } from 'react';
import MultiCarousel from '@components/Carousel/MultiCarousel';
import Poster from '@components/Poster/Poster';
import Heading from '@components/Heading/Heading';
import { IUpcomingMovie } from '@type/movie';
import styled from '@emotion/styled';
import { tablet } from '@utils/responsive';

interface UpcomingLayoutProps extends HTMLAttributes<HTMLDivElement> {
  upcomingMovies: IUpcomingMovie[];
}

export default function Upcoming({
  upcomingMovies,
  ...props
}: UpcomingLayoutProps) {
  return (
    <Wrapper {...props}>
      <Heading>New & Upcoming Movies</Heading>
      <MultiCarousel>
        {upcomingMovies.map(
          ({ id, poster_path, title, vote_average }: IUpcomingMovie) => (
            <Poster
              key={id}
              src={poster_path}
              title={title}
              vote={vote_average}
              contentId={id}
              mediaType='movie'
            />
          )
        )}
      </MultiCarousel>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background: var(--white);
  margin: 3rem 0;

  ${tablet(`button { display: none; }`)}
`;
