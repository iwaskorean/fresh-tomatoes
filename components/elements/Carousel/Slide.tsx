import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface SlideProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function Slide({ children, ...props }: SlideProps) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  height: inherit;

  img {
    width: 100%;
  }
`;
