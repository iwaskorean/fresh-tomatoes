import { HTMLAttributes, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Overlay from './Overlay';
import Content from './Content';
import styled from '@emotion/styled';

interface TrailerProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  handleShow(): void;
  mediaType?: string;
  contentId: number;
}

export default function Trailer({
  show,
  handleShow,
  mediaType,
  contentId,
  ...props
}: TrailerProps) {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${mediaType}/${contentId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        const id = results[results.length - 1].key;
        setVideoId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contentId, mediaType]);

  return createPortal(
    <>
      {show && (
        <Wrapper {...props}>
          <Overlay handleShow={handleShow} />
          <Content videoId={videoId} />
        </Wrapper>
      )}
    </>,
    document.body
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;
