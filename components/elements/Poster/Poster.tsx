import styled from '@emotion/styled';
import Image, { ImageLoaderProps } from 'next/image';

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

export default function Poster({ src, title, vote, ...props }: PosterProps) {
  return (
    <Container {...props}>
      <ImageBox>
        {(
          <Image
            loader={imageLoader}
            src={src}
            alt={title}
            width={500}
            height={700}
            placeholder='blur'
            blurDataURL='/static/images/rotten.svg'
          />
        ) || <h2>loading</h2>}
      </ImageBox>
      <Box>
        <VotePertange>{vote * 10}%</VotePertange>
      </Box>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.section``;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Box = styled.div``;

const Title = styled.h1``;

const VotePertange = styled.p``;
