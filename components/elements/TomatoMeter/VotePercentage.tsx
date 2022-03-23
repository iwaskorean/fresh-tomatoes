import { AnchorHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface VotePercentageProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  vote: number;
}

export default function VotePercentage({
  vote,
  ...props
}: VotePercentageProps) {
  return (
    <Box vote={vote * 10} {...props}>
      {vote ? vote * 10 + '%' : '--'}
    </Box>
  );
}

const Box = styled.a<{ vote: number }>`
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
