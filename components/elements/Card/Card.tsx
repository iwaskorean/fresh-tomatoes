import { HTMLAttributes, PropsWithChildren } from 'react';
import Image from 'next/image';
import { tmdbImageLoader } from '@utils/imageLoader';
import styled from '@emotion/styled';

interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title: string;
  overview?: string;
  releaseData?: string;
  src?: string;
}

export default function Card({
  title,
  overview,
  releaseData,
  src,
  children,
  ...props
}: CardProps) {
  return (
    <Container {...props}>
      {src && (
        <Image
          loader={tmdbImageLoader}
          src={src}
          alt={title}
          width={500}
          height={700}
          placeholder='blur'
          blurDataURL='/static/images/rotten.svg'
        />
      )}
      <Title>{title}</Title>
      {overview && (
        <Text>{overview.split(' ').slice(0, 15).join(' ')} ...</Text>
      )}
      {releaseData && (
        <Date>
          <DateText>Release Date:</DateText>
          <DateText>{releaseData}</DateText>
        </Date>
      )}
      {children}
    </Container>
  );
}

const Container = styled.article`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 3px var(--grayLight4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: var(--font-regular);
  margin: 1rem 0;
  padding: 0 1rem;

  text-align: center;
`;

const Text = styled.h2`
  font-size: 0.9rem;
  color: var(--grayDark1);
  font-weight: var(--font-light);
  padding: 0 1rem;
`;

const Date = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  padding: 0 1rem;
`;

const DateText = styled.p`
  font-size: 0.8rem;
  color: var(--grayLight4);
  font-weight: var(--font-light);

  & + & {
    margin-left: 0.5rem;
  }
`;
