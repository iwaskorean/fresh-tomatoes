import Image from 'next/image';
import { tmdbImageLoader } from '@utils/imageLoader';
import styled from '@emotion/styled';

interface DetailLayoutProps {
  title?: string;
  overview?: string;
  poster?: string;
  releaseDate?: string;
  runningTime?: number;
  genres?: { id: number; name: string }[];
  homepage?: string;
  tagline?: string | null;
}

export default function Detail({
  title,
  overview,
  poster,
  releaseDate,
  runningTime,
  genres,
  homepage,
  tagline,
}: DetailLayoutProps) {
  return (
    <Wrapper>
      <ImageBox>
        <Image
          loader={tmdbImageLoader}
          src={poster || ''}
          alt={title || ''}
          width={500}
          height={700}
          placeholder='blur'
          blurDataURL='/static/images/rotten.svg'
        />
      </ImageBox>

      <Group>
        <Title>{title}</Title>
        <TagLine>{tagline}</TagLine>
        <SubTitle>{overview}</SubTitle>
        <Box>
          <Text>Release date: {releaseDate}</Text>
          {runningTime && <Text>Running time: {runningTime}mins</Text>}
          <Text>Genre: {genres?.map((genre) => genre.name).join(', ')}</Text>
          {homepage && (
            <Anchor target='_blank' href={homepage} rel='noopener noreferrer'>
              <Button>See more details</Button>
            </Anchor>
          )}
        </Box>
      </Group>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 2rem 0;
  width: 95%;
  height: 90vh;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2.5%;
  align-items: center;
`;

const ImageBox = styled.div``;

const Group = styled.div``;

const Box = styled.div`
  margin: 2.5rem 0;
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
  font-size: 1.3rem;
  font-weight: var(--font-light);
  color: var(--grayDark2);
  margin: 1rem 0;
`;

const Text = styled.p`
  color: var(--grayDark2);
  font-size: 1.1rem;
  margin: 0.5rem 0;
  letter-spacing: 0.04rem;
`;

const Button = styled.button`
  outline: 0;
  border: none;
  font-size: 1.1rem;
  background-color: var(--blue);
  color: var(--white);
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  margin: 2.5rem 0;
  cursor: pointer;

  &:hover {
    background-color: var(--blueHover);
  }
`;

const Anchor = styled.a``;
