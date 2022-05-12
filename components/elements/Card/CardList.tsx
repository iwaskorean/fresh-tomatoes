import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { breakpoints } from 'GlobalStyle';
import { mobile, tablet } from '@utils/responsive';

interface CardListProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function CardList({ children, ...props }: CardListProps) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 0.33fr));
  ${tablet({
    gridTemplateColumns: 'repeat(auto-fill, minmax(14rem, 0.5fr))',
  })}
  ${mobile({ gridTemplateColumns: '1fr' })}
  justify-content: center;
  gap: 2rem;
  margin: 1rem auto;
  padding: 1rem;
`;
