import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

export default function Posters({
  children,
  ...props
}: {
  children?: HTMLAttributes<HTMLDivElement> | ReactNode;
}) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  padding: 3rem 1rem;
  gap: 3rem 1.5rem;
`;
