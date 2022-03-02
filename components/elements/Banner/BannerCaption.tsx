import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface BannerCaptionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle: string[];
}

export default function BannerCaption({
  title,
  subTitle,
  ...props
}: BannerCaptionProps) {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <SubTitle>{subTitle.join(', ')}</SubTitle>
    </Container>
  );
}

const Container = styled.div`
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
`;

const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.p`
  font-size: 0.8rem;
`;
