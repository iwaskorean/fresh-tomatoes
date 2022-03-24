import { HTMLAttributes } from 'react';
import Item, { INavItem } from './Item';
import styled from '@emotion/styled';

interface NavProps extends HTMLAttributes<HTMLDivElement> {
  items: INavItem[];
}

export default function Nav({ items, ...props }: NavProps) {
  return (
    <Container {...props}>
      {items.map(({ text, url }, i: number) => (
        <Item url={url} text={text} key={i} />
      ))}
    </Container>
  );
}

const Container = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  font-family: var(--font-oswald);
  border-radius: 0.3rem;
  box-shadow: 0 0 1rem var(--grayLight2);
  padding: 0 1rem;
  margin: 2.5rem 0;
`;
