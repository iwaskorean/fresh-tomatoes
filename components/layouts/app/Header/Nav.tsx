import { HTMLAttributes } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

interface NavProps extends HTMLAttributes<HTMLDivElement> {
  items: IItem[];
}

interface IItem {
  title: string;
  path: string;
}

export default function Nav({ items, ...props }: NavProps) {
  return (
    <StyledNav {...props}>
      {items.map(({ title, path }, i: number) => {
        return (
          <Link key={i} href={`/${path}`} passHref={true}>
            <StyledLink>{title}</StyledLink>
          </Link>
        );
      })}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: var(--white);
  letter-spacing: 1px;
  padding: 0rem 0.3rem;
  border-radius: 3px;
  font-family: var(--font-oswald);

  & + & {
    margin-left: 0.7rem;
  }

  &:hover {
    background-color: var(--white);
    color: var(--black);
  }
`;
