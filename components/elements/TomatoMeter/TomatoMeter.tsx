import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { getTomatoMeter } from '@utils/tomatoMeter';
import VotePercentage from './VotePercentage';
import styled from '@emotion/styled';

interface TomatoMeterProps extends HTMLAttributes<HTMLDivElement> {
  voteAverage: number;
  href?: string;
}

export default function TomatoMeter({
  voteAverage,
  href,
  ...props
}: TomatoMeterProps) {
  return (
    <Container {...props}>
      <TomatoImage>{getTomatoMeter(voteAverage)}</TomatoImage>
      {href ? (
        <Link href={href} passHref={true}>
          <VotePercentage vote={voteAverage} />
        </Link>
      ) : (
        <VotePercentage vote={voteAverage} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TomatoImage = styled.span`
  width: 1.3rem;
`;
