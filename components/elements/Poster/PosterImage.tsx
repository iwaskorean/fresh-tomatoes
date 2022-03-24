import { tmdbImageLoader } from '@utils/imageLoader';
import Image, { ImageProps } from 'next/image';

interface PosterImage extends ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function PosterImage({
  src,
  alt,
  width,
  height,
  ...props
}: PosterImage) {
  return (
    <Image
      loader={tmdbImageLoader}
      src={src}
      alt={alt}
      width={width ?? 500}
      height={height ?? 700}
      placeholder='blur'
      blurDataURL='/static/images/rotten.svg'
      {...props}
    />
  );
}
