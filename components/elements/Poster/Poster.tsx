import { HTMLAttributes, useState } from 'react';
import Image from 'next/image';
import { getTomatoMeter } from '@utils/index';
import { tmdbImageLoader } from '@utils/imageLoader';
import Trailer from '@components/Trailer/Trailer';
import PlayIcon from '@assets/icons/play-icon.png';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

interface PosterProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  title: string;
  vote: number;
  mediaType?: string;
  contentId?: number;
}

export default function Poster({
  src,
  title,
  vote,
  mediaType,
  contentId,
  ...props
}: PosterProps) {
  const [showTrailer, setShowTrailer] = useState(false);

  const router = useRouter();

  const handleShowTrailer = () => {
    setShowTrailer((prev) => !prev);
  };

  return (
    <Container {...props}>
      <Anchor>
        <ImageBox>
          <Image
            loader={tmdbImageLoader}
            src={src}
            alt={title || ''}
            width={500}
            height={700}
            placeholder='blur'
            blurDataURL='/static/images/rotten.svg'
          />
          {contentId && mediaType !== 'person' && (
            <>
              <Button onClick={() => setShowTrailer(true)}>
                <Image src={PlayIcon} alt='play' />
              </Button>
              {showTrailer && (
                <Trailer
                  show={showTrailer}
                  handleShow={handleShowTrailer}
                  mediaType={mediaType}
                  contentId={contentId}
                />
              )}
            </>
          )}
        </ImageBox>

        <Box
          onClick={() =>
            mediaType !== 'person' && router.push(`/${mediaType}/${contentId}`)
          }
        >
          <Group>
            <TomatoMeter>{getTomatoMeter(vote)}</TomatoMeter>
            <VoteAverage vote={vote * 10}>
              {vote ? vote * 10 + '%' : '--'}
            </VoteAverage>
          </Group>
          <Title>{title}</Title>
        </Box>
      </Anchor>
    </Container>
  );
}

const Container = styled.article`
  &:hover {
    > div:first-of-type {
      opacity: 0.8;
    }
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;

  span {
    border-radius: 0.8rem;
  }
`;

const Box = styled.div`
  cursor: pointer;
  &:hover {
    color: var(--blueHover);
  }
`;

const Anchor = styled.a``;

const Group = styled.div`
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

const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 4px);
  cursor: pointer;
  border: none;
  outline: 0;
  background: rgba(0 0 0 / 0.2);
  border-radius: 0.8rem;

  span {
    width: 4rem !important;
    opacity: 0.9 !important;
  }
`;
