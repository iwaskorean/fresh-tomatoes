import Image, { ImageProps } from 'next/image';
import styled from '@emotion/styled';

interface BannerPicProps extends ImageProps {
  src: string;
  alt: string;
}

const imageLoader = (src: string) => {
  return src.includes('http')
    ? src
    : `https://image.tmdb.org/t/p/original/${src}`;
};

export default function BannerPic({ src, alt, ...props }: BannerPicProps) {
  return (
    <StyledImage
      loader={() => imageLoader(src)}
      layout='fill'
      src={src}
      alt={alt}
      {...props}
    />
  );
}

const StyledImage = styled(Image)`
  max-height: 300px;
`;
