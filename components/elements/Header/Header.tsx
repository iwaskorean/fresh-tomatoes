import Image from 'next/image';
import LogoImage from '../../../public/static/images/logo.svg';
import Link from 'next/link';
import SearchForm from '@components/SearchForm/SearchForm';
import styled from '@emotion/styled';
import { breakpoints } from 'GlobalStyle';

export default function Header() {
  const categories = [
    { title: 'trending', path: 'trending' },
    { title: 'movies', path: 'movie' },
    { title: 'tv shows', path: 'tv' },
  ];

  return (
    <Container>
      <Link href='/' passHref={true}>
        <LogoLink>
          <Logo
            layout='fixed'
            width='180px'
            src={LogoImage}
            alt='Fresh Tomatoes'
            priority
          />
        </LogoLink>
      </Link>
      <SearchForm />
      <Nav>
        {categories.map(({ title, path }, i: number) => {
          return (
            <Link key={i} href={`/${path}`} passHref={true}>
              <StyledLink>{title}</StyledLink>
            </Link>
          );
        })}
      </Nav>
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

const LogoLink = styled.a``;

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

const Logo = styled(Image)``;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;
