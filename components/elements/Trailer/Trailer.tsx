import { HTMLAttributes, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Overlay from './Overlay';
import Content from './Content';
import { typedFetch } from '@utils/typedFetch';
import { IResponse } from '@type/index';
import styled from '@emotion/styled';

interface TrailerProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  handleShow(): void;
  mediaType?: string;
  contentId: number;
}

interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
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
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  useEffect(() => {
    const fetchVideoId = async () => {
      const { results } = await typedFetch<IResponse<IVideo>>(
        `https://api.themoviedb.org/3/${mediaType}/${contentId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );

      setVideoId(results[results.length - 1].key);
    };

    fetchVideoId();
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
