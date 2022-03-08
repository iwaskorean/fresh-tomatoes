import React, { ReactElement, useState } from 'react';
import { CarouselProps } from '@components/Carousel/Carousel';
import SlideButton from '@components/Carousel/SlideButton';
import styled from '@emotion/styled';

export default function MultiCarousel({ children, ...props }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const childrens = React.Children.toArray(children) as ReactElement[];
  const viewItemsLength = 5;

  return (
    <Wrapper {...props}>
      <Inner
        current={current}
        viewItemsLength={viewItemsLength}
        length={childrens.length}
      >
        {childrens.map((children, i: number) => (
          <Slide key={i} current={current} length={childrens.length}>
            {children}
          </Slide>
        ))}
      </Inner>
      {current !== 0 && (
        <SlideButton
          multiCarousel={true}
          prev
          handleSlide={() => setCurrent((prev) => prev - 1)}
        />
      )}
      {current + 1 < Math.ceil(childrens.length / viewItemsLength) && (
        <SlideButton
          multiCarousel={true}
          next
          handleSlide={() => setCurrent((prev) => prev + 1)}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Inner = styled.div<{
  current: number;
  length: number;
  viewItemsLength: number;
}>`
  --slideWidth: calc(80vw / ${({ viewItemsLength }) => viewItemsLength});
  width: calc(var(--slideWidth) * ${({ length }) => length});
  display: flex;
  transform: translate3d(${({ current }) => current * -80}vw, 0, 0);
  transition: transform 0.6s ease-in-out;
`;

const Slide = styled.div<{
  current: number;
  length: number;
}>`
  width: var(--slideWidth);
  padding: 0.5rem;
`;
