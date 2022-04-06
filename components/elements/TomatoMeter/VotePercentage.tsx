import { AnchorHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { css } from '@emotion/react';

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
    <Text vote={vote} {...props}>
      {vote ? vote * 10 + '%' : '--'}
    </Text>
  );
}

const Style = css`
  font-weight: var(--font-bold);
  font-size: 1rem;
  text-decoration: none;
  color: var(--black);
`;

const Anchor = styled.a<{ vote: number }>`
  ${Style}
  ${({ vote }) =>
    !vote &&
    `
  color: var(--grayLight4);
  letter-spacing: 0.1rem;
`};
`;

const Text = styled.span<{ vote: number }>`
  ${Style};
  ${({ vote }) =>
    !vote &&
    `
  color: var(--grayLight4);
  letter-spacing: 0.1rem;
`};
`;
