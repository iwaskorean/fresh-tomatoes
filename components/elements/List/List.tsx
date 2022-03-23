import Item, { ItemProps } from './Item';
import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  items: ItemProps[];
}

export default function List({ items }: ListProps) {
  return (
    <Container>
      {items.map(({ contentId, text, voteAverage, href }) => {
        return (
          <Item
            key={contentId}
            contentId={contentId}
            text={text}
            href={href}
            voteAverage={voteAverage}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
  width: 100%;
  padding: 0 0.5rem;
  margin: 0.5rem 0;
`;
