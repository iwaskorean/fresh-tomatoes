import { HTMLAttributes } from 'react';
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
      <VotePercentage vote={voteAverage} href={href} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const TomatoImage = styled.span`
  width: 1.2rem;
`;
