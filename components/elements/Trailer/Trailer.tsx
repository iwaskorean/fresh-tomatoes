import { IframeHTMLAttributes, useEffect, useState } from 'react';
import { typedFetch } from '@utils/typedFetch';
import { IResponse } from '@type/index';
import styled from '@emotion/styled';

interface TrailerProps extends IframeHTMLAttributes<HTMLIFrameElement> {
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

export default function Content({
  mediaType,
  contentId,
  ...props
}: TrailerProps) {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    const fetchVideoId = async () => {
      const { results } = await typedFetch<IResponse<IVideo>>(
        `https://api.themoviedb.org/3/${mediaType}/${contentId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );

      setVideoId(results[results.length - 1].key);
    };

    fetchVideoId();
  }, [contentId, mediaType]);

  return (
    <Iframe
      width='100%'
      height='100%'
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
      {...props}
    />
  );
}

const Iframe = styled.iframe`
  background-color: var(--white);
  width: 70vw;
  min-width: 20rem;
  height: 40vw;
  min-height: 10rem;
`;
