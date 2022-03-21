import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { breakpoints } from 'GlobalStyle';

interface CardListProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function CardList({ children, ...props }: CardListProps) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 0.33fr));
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(14rem, 0.5fr));
  }
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
  justify-content: center;
  gap: 2rem;
  margin: 1rem auto;
  padding: 1rem;
`;
