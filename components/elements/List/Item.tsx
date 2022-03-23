import TomatoMeter from '@components/TomatoMeter/TomatoMeter';
import Link from 'next/link';
import { LiHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  contentId: number;
  text: string;
  href?: string;
  voteAverage?: number;
}

export default function Item({
  contentId,
  text,
  href,
  voteAverage,
  ...props
}: ItemProps) {
  return (
    <Container {...props}>
      {href ? (
        <Link href={href} passHref={true}>
          <Title>{text}</Title>
        </Link>
      ) : (
        <Title>{text}</Title>
      )}
      <TomatoMeter voteAverage={voteAverage ?? 0} href={href} />
    </Container>
  );
}

const Container = styled.li`
  width: 95%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  margin: 0 auto;
  border-bottom: 0.1rem solid var(--grayLight2);

  &:hover {
    a {
      color: var(--blueHover);
    }
  }
`;

const Title = styled.a`
  text-decoration: none;
  color: var(--black);
  font-size: 1rem;
`;
