import { HTMLAttributes, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
      .then((res) => {
        return res.json();
      })
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
          <Overlay onClick={handleShow} />
          <Content>
            <Iframe
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            />
          </Content>
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

const Overlay = styled.div`
  z-index: -1;
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Content = styled.div`
  background: white;
  position: fixed;
  width: 70%;
  min-width: 20rem;
  height: 60%;
  min-height: 10rem;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const Iframe = styled.iframe`
  width: 100%;
`;
