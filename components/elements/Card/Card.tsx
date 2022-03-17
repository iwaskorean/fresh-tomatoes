import { HTMLAttributes, LegacyRef, PropsWithChildren } from 'react';
import Image from 'next/image';
import { tmdbImageLoader } from '@utils/imageLoader';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title: string;
  overview?: string;
  releaseData?: string;
  src?: string;
  innerRef?: LegacyRef<HTMLElement>;
  contentId?: number;
  mediaType?: string;
}

export default function Card({
  title,
  overview,
  releaseData,
  src,
  innerRef,
  contentId,
  children,
  mediaType,
  ...props
}: CardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${mediaType}/${contentId}`);
  };

  return (
    <Container ref={innerRef} onClick={() => handleClick()} {...props}>
      <Anchor>
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
      </Anchor>
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

const Anchor = styled.a``;

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
