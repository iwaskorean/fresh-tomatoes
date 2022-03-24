import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

export interface INavItem {
  text: string;
  url: string;
}

interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function Item({ text, url, ...props }: NavItemProps & INavItem) {
  const router = useRouter();

  return (
    <Link href={`/${url}`} passHref={true}>
      <Anchor active={text === router.query.category} {...props}>
        {text}
      </Anchor>
    </Link>
  );
}

const Anchor = styled.a<{ active: boolean }>`
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
