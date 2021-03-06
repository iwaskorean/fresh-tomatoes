import { AnchorHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface BannerCaptionProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  subTitle?: string[];
  link?: string;
}

export default function BannerCaption({
  title,
  subTitle,
  link,
  ...props
}: BannerCaptionProps) {
  return (
    <>
      {link ? (
        <AnchorContainer
          target='_blank'
          rel='noopener noreferrer'
          href={link}
          link={link}
          {...props}
        >
          <Title>{title}</Title>
          <SubTitle>{subTitle?.join(', ')}</SubTitle>
        </AnchorContainer>
      ) : (
        <Container
          target='_blank'
          rel='noopener noreferrer'
          href={link}
          link={link}
          {...props}
        >
          <Title>{title}</Title>
          <SubTitle>{subTitle?.join(', ')}</SubTitle>
        </Container>
      )}
    </>
  );
}

const Style = css`
  text-decoration: none;
  width: 90%;
  position: absolute;
  background-color: rgba(0 0 0 / 0.3);
  z-index: 2;
  padding: 1rem;
  bottom: 1rem;
  left: 5%;
  border-left: 0.25rem solid var(--blue);
  color: var(--white);
  height: 6rem;
  border-radius: 3px;
  overflow-y: scroll;
  transition: transform 0.3s;
`;

const Container = styled.span<{ link?: string }>`
  ${Style}
  ${({ link }) =>
    link &&
    `
    &:hover {
      transform: scale(1.05);
    }
  `}
`;

const AnchorContainer = styled.a<{ link?: string }>`
  ${Style}
  ${({ link }) =>
    link &&
    `
    &:hover {
      transform: scale(1.05);
    }
  `}
`;

const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  font-size: 0.8rem;
`;
