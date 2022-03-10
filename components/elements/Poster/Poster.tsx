import Image, { ImageLoaderProps } from 'next/image';
import { getTomatoMeter } from '@utils/index';
import { tmdbImageLoader } from '@utils/imageLoader';
import styled from '@emotion/styled';

interface PosterProps {
  src: string;
  title: string;
  vote: number;
}

export default function Poster({ src, title, vote, ...props }: PosterProps) {
  return (
    <Container {...props}>
      <ImageBox>
        <Image
          loader={tmdbImageLoader}
          src={src}
          alt={title}
          width={500}
          height={700}
          placeholder='blur'
          blurDataURL='/static/images/rotten.svg'
        />
      </ImageBox>
      <Box>
        <TomatoMeter>{getTomatoMeter(vote)}</TomatoMeter>
        <VoteAverage vote={vote * 10}>
          {vote ? vote * 10 + '%' : '--'}
        </VoteAverage>
      </Box>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.article``;

const ImageBox = styled.div`
  width: 100%;

  span {
    border-radius: 0.8rem;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0.3rem 0;
`;

const VoteAverage = styled.p<{ vote: number }>`
  font-weight: var(--font-bold);
  font-size: 1rem;

  ${({ vote }) =>
    !vote &&
    `
    color: var(--grayLight4);
    letter-spacing: 0.1rem;
  `}
`;

const TomatoMeter = styled.span`
  width: 1.5rem;
  height: 100%;
`;
const Title = styled.h1`
  font-weight: var(--font-regular);
  font-size: 1rem;
`;
