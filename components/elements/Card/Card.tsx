import { HTMLAttributes, LegacyRef, PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PopcornImage from '@assets/images/popcorn.svg';
import PosterImage from '@components/Poster/PosterImage';
import styled from '@emotion/styled';

interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title: string;
  overview?: string;
  releaseData?: string;
  src?: string;
  innerRef?: LegacyRef<HTMLElement>;
  contentId?: number;
  mediaType?: string | string[];
}

export default function Card({
  title,
  overview,
  releaseData,
  src,
  innerRef,
  contentId,
  mediaType,
  ...props
}: CardProps) {
  const getImage = (src?: string) =>
    src ? (
      <PosterImage src={src} alt={title} width={500} height={700} />
    ) : (
      <Image src={PopcornImage} alt={title} width={500} height={700} />
    );

  return (
    <Container ref={innerRef} {...props}>
      <Link href={`/${mediaType}/${contentId}`} passHref={true}>
        <Anchor>
          {getImage(src)}
          <Title>{title}</Title>
          {overview && <Text>{overview}</Text>}
          {releaseData && (
            <Box>
              <DateText>Release Date:</DateText>
              <DateText>{releaseData}</DateText>
            </Box>
          )}
        </Anchor>
      </Link>
    </Container>
  );
}

const Container = styled.article`
  background-color: var(--white);
  border-radius: 0.3rem;
  box-shadow: 0px 0px 3px var(--grayLight4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: var(--font-regular);
  margin: 1rem 0;
  padding: 0 1rem;
  text-align: center;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: var(--black);
  padding: 2rem;
`;

const Text = styled.h2`
  font-size: 0.9rem;
  color: var(--grayDark1);
  font-weight: var(--font-light);
  padding: 0 1rem;

  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Box = styled.div`
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
