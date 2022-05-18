import Link from 'next/link';
import Logo from './Logo';
import SearchForm from '@components/SearchForm/SearchForm';
import Nav from './Nav/Nav';
import SubNav from './Nav/SubNav';
import { tablet } from '@utils/responsive';
import styled from '@emotion/styled';

const items = [
  { title: 'trending', path: 'trending' },
  { title: 'movies', path: 'movie' },
  { title: 'tv shows', path: 'tv' },
];

const subItems = [{ title: "What's the Fresh Tomatoes?", path: 'about' }];

export default function Header() {
  return (
    <Wrapper>
      <SubNav items={subItems} />
      <Link href='/' passHref={true}>
        <Anchor>
          <Logo />
        </Anchor>
      </Link>
      <SearchForm />
      <Nav items={items} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: auto;
  min-height: 6rem;
  background-color: var(--blue);
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;

  ${tablet({ justifyContent: 'center' })}
`;

const Anchor = styled.a``;
