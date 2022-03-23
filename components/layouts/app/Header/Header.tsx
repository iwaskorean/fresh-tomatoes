import Link from 'next/link';
import Logo from './Logo';
import Nav from './Nav';
import SearchForm from '@components/SearchForm/SearchForm';
import styled from '@emotion/styled';
import { breakpoints } from 'GlobalStyle';

export default function Header() {
  const items = [
    { title: 'trending', path: 'trending' },
    { title: 'movies', path: 'movie' },
    { title: 'tv shows', path: 'tv' },
  ];

  return (
    <Container>
      <Link href='/' passHref={true}>
        <Anchor>
          <Logo />
        </Anchor>
      </Link>
      <SearchForm />
      <Nav items={items} />
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: auto;
  min-height: 6rem;

  background-color: var(--blue);
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`;

const Anchor = styled.a``;
