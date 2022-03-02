import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';
import { BannerProps } from '@components/elements/Banner/Banner';
import Slide from './Slide';
import styled from '@emotion/styled';

interface CarouselProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function Carousel({ children, ...props }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const childrens = React.Children.toArray(
    children
  ) as ReactElement<BannerProps>[];

  return (
    <Container {...props}>
      <Inner length={childrens.length} current={current}>
        {childrens.map((children, i) => {
          console.log(children);

          const prev = current === 0 ? childrens.length - 1 : current - 1;
          const next = current === childrens.length - 1 ? 0 : current + 1;
          return (
            <Slide
              key={i}
              active={i === current}
              prev={i === prev}
              next={i === next}
            >
              {children}
            </Slide>
          );
        })}
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  height: inherit;
`;

const Inner = styled.div<{ length: number; current: number }>`
  width: ${({ length }) => (length ? `calc(${length} * 100%)` : '100%')};
  position: relative;
  display: flex;
  transform: ${({ current, length }) =>
    `translate3d(calc(${current} * -100% / ${length}), 0, 0)`};
  transition: transform 0.3s;
  height: inherit;
`;
