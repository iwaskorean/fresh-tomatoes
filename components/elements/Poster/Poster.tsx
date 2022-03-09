import Image, { ImageLoaderProps } from 'next/image';
import Rotten from '@assets/images/rotten.svg';
import Fresh from '@assets/images/fresh.svg';
import Certified from '@assets/images/certified.svg';
import Unavailable from '@assets/images/unavailable.svg';
import styled from '@emotion/styled';

interface PosterProps {
  src: string;
  title: string;
  vote: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://image.tmdb.org/t/p/original${src}?w=${width}&q=${
    quality || 75
  }`;
};

const getTomatoMeter = (voteAverage: number) => {
  const votePercent = voteAverage * 10;
  if (votePercent === 0) {
    return <Image src={Unavailable} alt='unavailable score' />;
  }
  if (votePercent >= 75) {
    return <Image src={Certified} alt='certified tomato' />;
  }
  if (votePercent >= 60) {
    return <Image src={Fresh} alt='fresh tomato' />;
  }
  if (votePercent < 60) {
    return <Image src={Rotten} alt='rotten tomato' />;
  }
};

export default function Poster({ src, title, vote, ...props }: PosterProps) {
  return (
    <Container {...props}>
      <ImageBox>
        <Image
          loader={imageLoader}
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

const Container = styled.section``;

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
  font-size: 1.1rem;

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
