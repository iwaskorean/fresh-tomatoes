import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  handleShow(): void;
}

export default function Overlay({ handleShow, ...props }: OverlayProps) {
  return <Wrapper onClick={handleShow} {...props} />;
}

const Wrapper = styled.div`
  z-index: -1;
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
