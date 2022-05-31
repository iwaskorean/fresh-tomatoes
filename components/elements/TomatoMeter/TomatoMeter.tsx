import { HTMLAttributes } from 'react';
import VotePercentage from './VotePercentage';
import styled from '@emotion/styled';
import MeterImage from './MeterImage';

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
      <Box>
        <MeterImage voteAverage={voteAverage} />
      </Box>
      <VotePercentage vote={voteAverage} href={href} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Box = styled.span`
  width: 1.2rem;
`;
