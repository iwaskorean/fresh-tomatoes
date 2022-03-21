import { HTMLAttributes } from 'react';
import BannerCaption from './BannerCaption';
import Badge from './Badge';
import styled from '@emotion/styled';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  title: string;
  subTitle?: string[];
  badge?: string;
  link?: string;
}

export default function Banner({
  src,
  alt,
  title,
  subTitle,
  badge,
  link,
  ...props
}: BannerProps) {
  const bakcgroundUrl = src.includes('http')
    ? src
    : `https://image.tmdb.org/t/p/original/${src}`;

  return (
    <Container {...props} src={bakcgroundUrl}>
      <BannerCaption title={title} subTitle={subTitle} link={link} />
      {badge && <Badge>{badge}</Badge>}
    </Container>
  );
}

const Container = styled.section<{ src: string }>`
  width: 100%;
  height: inherit;
  position: relative;
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: 50%;
`;
