import { AnchorHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface VotePercentageProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  vote: number;
  href?: string;
}

export default function VotePercentage({
  vote,
  href,
  ...props
}: VotePercentageProps) {
  return href ? (
    <Link href={href} passHref={true}>
      <Anchor vote={vote} {...props}>
        {vote ? vote * 10 + '%' : '--'}
      </Anchor>
    </Link>
  ) : (
    <Anchor vote={vote} {...props}>
      {vote ? vote * 10 + '%' : '--'}
    </Anchor>
  );
}

const Anchor = styled.a<{ vote: number }>`
  font-weight: var(--font-bold);
  font-size: 1rem;
  text-decoration: none;
  color: var(--black);
  ${({ vote }) =>
    !vote &&
    `
  color: var(--grayLight4);
  letter-spacing: 0.1rem;
`};
`;
