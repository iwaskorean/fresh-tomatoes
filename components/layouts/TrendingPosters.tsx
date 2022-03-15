import styled from '@emotion/styled';
import { ReactNode } from 'react';

export default function TrendingPosters({
  children,
}: {
  children?: ReactNode;
}) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  padding: 3rem 1rem;
  gap: 3rem 1.5rem;
`;
