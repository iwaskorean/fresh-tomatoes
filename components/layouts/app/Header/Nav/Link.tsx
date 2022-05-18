import Link, { LinkProps } from 'next/link';
import styled from '@emotion/styled';

interface NavLinkProps extends LinkProps {
  title: string;
}

export default function NavLink({ title, ...props }: NavLinkProps) {
  return (
    <Link key={title} passHref={true} {...props}>
      <Anchor>{title}</Anchor>
    </Link>
  );
}

export const Anchor = styled.a`
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
