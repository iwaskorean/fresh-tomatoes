import { HTMLAttributes } from 'react';
import Image from 'next/image';
import PopcornImage from '@assets/images/popcorn.svg';
import PosterImage from '@components/Poster/PosterImage';
import TomatoMeter from '@components/TomatoMeter/TomatoMeter';
import styled from '@emotion/styled';
import { breakpoints } from 'GlobalStyle';

interface IDetailItem {
  title: string;
  overview: string;
  poster: string;
  releaseDate: string;
  runningTime: number;
  homepage: string;
  genres: {
    name: string[] | string;
  }[];
  tagline: string | null;
  vote: number;
}

interface DetailLayoutProps extends HTMLAttributes<HTMLDivElement> {
  item: IDetailItem;
}

export default function Detail({ item, ...props }: DetailLayoutProps) {
  const {
    title,
    overview,
    poster,
    releaseDate,
    runningTime,
    genres,
    homepage,
    tagline,
    vote,
  } = item;

  return (
    <Wrapper {...props}>
      <ImageBox>
        {poster ? (
          <PosterImage src={poster} alt={title} />
        ) : (
          <Image src={PopcornImage} alt={title} width={500} height={700} />
        )}
      </ImageBox>

      <Group>
        <TomatoMeter voteAverage={vote} />
        <Title>{title}</Title>
        <TagLine>{tagline}</TagLine>
        <SubTitle>{overview}</SubTitle>

        {releaseDate && (
          <Box>
            <Text>Release date: {releaseDate || '-'}</Text>
            <Text>
              Running time: {runningTime ? runningTime + 'mins' : '-'}
            </Text>
            <Text>
              Genre: {genres.map((genre) => genre.name).join(', ') || '-'}
            </Text>
          </Box>
        )}

        {homepage && (
          <Anchor target='_blank' href={homepage} rel='noopener noreferrer'>
            See more details
          </Anchor>
        )}
      </Group>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 2rem 0;
  width: 95%;
  height: auto;
  min-height: 80vh;
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: ${breakpoints.desktopSmall}) {
    grid-template-columns: 1fr;
    height: auto;
    padding-bottom: 3rem;
  }
  gap: 2.5%;
  align-items: center;
`;

const ImageBox = styled.div`
  justify-self: center;
`;

const Group = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Box = styled.div`
  margin: 1.5rem 0;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  margin: 1rem 0;
`;

const TagLine = styled.p`
  font-size: 1.3rem;
  color: var(--grayDark1);
  opacity: 0.3;
  font-weight: var(--font-bold);
  letter-spacing: 0.1rem;
  font-style: italic;
`;

const SubTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: var(--font-light);
  color: var(--grayDark2);
  margin: 1rem 0;
  overflow-y: scroll;
`;

const Text = styled.p`
  color: var(--grayDark2);
  font-size: 1.1rem;
  margin: 0.5rem 0;
  letter-spacing: 0.04rem;
`;

const Anchor = styled.a`
  width: 12rem;
  text-align: center;
  text-decoration: none;
  border: none;
  font-size: 1.1rem;
  background-color: var(--blue);
  color: var(--white);
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  &:hover {
    background-color: var(--blueHover);
  }
`;