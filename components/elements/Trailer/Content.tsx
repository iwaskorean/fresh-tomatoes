import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  videoId: string;
}

export default function Content({ videoId, ...props }: ContentProps) {
  return (
    <Cotaniner {...props}>
      <Iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
      />
    </Cotaniner>
  );
}

const Cotaniner = styled.div`
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
