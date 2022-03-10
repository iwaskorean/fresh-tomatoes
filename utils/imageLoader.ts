import { ImageLoaderProps } from 'next/image';

export const tmdbImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://image.tmdb.org/t/p/original${src}?w=${width}&q=${
    quality || 75
  }`;
};
