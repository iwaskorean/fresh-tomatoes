import { HTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled';

interface NavProps extends HTMLAttributes<HTMLDivElement> {
  items: {
    text: string;
    url: string;
  }[];
}

export default function Nav({ items, ...props }: NavProps) {
  const router = useRouter();

  return (
    <Container {...props}>
      {items.map(({ text, url }, i: number) => (
        <Link key={i} href={`/${url}`} passHref={true}>
          <StyledLink active={text === router.query.category}>
            {text}
          </StyledLink>
        </Link>
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

const StyledLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: ${({ active }) => (active ? 'var(--blue)' : 'var(--black)')};
  font-size: 1.5rem;
  padding: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: var(--blueHover);
  }
`;
