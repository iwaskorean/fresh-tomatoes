import { HTMLAttributes } from 'react';
import BannerCaption from './BannerCaption';
import BannerPic from './BannerPic';
import styled from '@emotion/styled';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  title: string;
  subTitle: string[];
}

export default function Banner({
  src,
  alt,
  title,
  subTitle,
  ...props
}: BannerProps) {
  return (
    <Container {...props}>
      <BannerPic src={src} alt={alt} />
      <BannerCaption title={title} subTitle={subTitle} />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: inherit;
  position: relative;
`;
