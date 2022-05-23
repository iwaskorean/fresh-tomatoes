import NavWrapper from './Wrapper';
import NavLink from './Link';
import { NavProps } from './Nav';
import { desktopSmall, tablet } from '@utils/responsive';
import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function SubNav({ items }: NavProps) {
  const { data: session, status } = useSession();

  return (
    <SubNavWrapper>
      {items.map(({ title, path }) => (
        <NavLink key={title} href={`/${path}`} title={title} />
      ))}

      {session && <Button onClick={() => signOut()}>Sign Out</Button>}
      {!session && (
        <Button onClick={() => signIn()}>
          {status === 'loading' ? '...' : 'Sign In'}
        </Button>
      )}
    </SubNavWrapper>
  );
}

const SubNavWrapper = styled(NavWrapper)`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 0;
  top: 0;
  a {
    font-size: 0.9rem;
  }
  ${desktopSmall({ justifyContent: 'flex-start' })};
  ${tablet({ justifyContent: 'space-between' })};
`;

const Button = styled.button`
  text-transform: uppercase;
  font-size: 0.9rem;
  color: var(--white);
  letter-spacing: 1px;
  padding: 0rem 0.3rem;
  font-family: var(--font-oswald);
  background-color: transparent;
  outline: 0;
  margin: 0 1rem;
  border: none;
  cursor: pointer;
`;
