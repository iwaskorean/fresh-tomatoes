import { HTMLAttributes, useState } from 'react';
import { useRouter } from 'next/router';
import TomatoMeter from '@components/TomatoMeter/TomatoMeter';
import PlayButton from './PlayButton';
import PosterImage from './PosterImage';
import Modal from '@components/Modal/Modal';
import Trailer from '@components/Trailer/Trailer';
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

  const handleShowTrailer = (isShow: boolean) => {
    setShowTrailer(isShow);
  };

  const handleMoveDetailPage = () => {
    if (mediaType !== 'person') {
      router.push(`/${mediaType}/${contentId}`);
    }
  };

  return (
    <Container {...props}>
      <ImageBox>
        <PosterImage src={src} alt={title} />
        {mediaType !== 'person' && (
          <PlayButton handleClick={handleShowTrailer} />
        )}
      </ImageBox>
      <Box onClick={handleMoveDetailPage}>
        <TomatoMeter
          style={{ margin: '0.5rem 0 0.3rem 0' }}
          voteAverage={vote}
        />
        <Title>{title}</Title>
      </Box>

      {contentId && showTrailer && (
        <Modal show={showTrailer} handleShow={() => handleShowTrailer(false)}>
          <Trailer mediaType={mediaType} contentId={contentId} />
        </Modal>
      )}
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
    h1,
    a {
      color: var(--blueHover);
    }
  }
`;

const Title = styled.h1`
  font-weight: var(--font-regular);
  font-size: 1rem;
`;
