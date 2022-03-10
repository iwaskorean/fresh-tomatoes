import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface CardListProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function CardList({ children, ...props }: CardListProps) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 0.33fr));
  justify-content: center;
  gap: 2rem;
  margin: 1rem auto;
  padding: 1rem;
`;
