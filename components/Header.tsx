import Image from 'next/image';
import LogoImage from '../public/static/images/logo.svg';
import Link from 'next/link';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <Container>
      <Link href='/' passHref={true}>
        <LogoLink>
          <Logo layout='fixed' width='180px' src={LogoImage} alt='' />
        </LogoLink>
      </Link>
      <Nav>
        <Link href='/' passHref={true}>
          <StyledLink>Trend</StyledLink>
        </Link>
        <Link href='/' passHref={true}>
          <StyledLink>Movie</StyledLink>
        </Link>
        <Link href='/' passHref={true}>
          <StyledLink>TV</StyledLink>
        </Link>
        <Link href='/' passHref={true}>
          <StyledLink>Person</StyledLink>
        </Link>
      </Nav>
    </Container>
  );
}

const Container = styled.header`
  width: 95%;
  height: 5rem;
  background-color: var(--blue);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled.a``;

const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: var(--white);
  letter-spacing: 1px;
  padding: 0.5rem;
  border-radius: 3px;
  font-family: var(--font-oswald);

  & + & {
    margin-left: 1.5rem;
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
`;
