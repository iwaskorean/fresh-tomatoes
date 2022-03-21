import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { CarouselProps } from '@components/Carousel/Carousel';
import SlideButton from '@components/Carousel/SlideButton';
import styled from '@emotion/styled';
import { breakpoints } from 'GlobalStyle';

export default function MultiCarousel({ children, ...props }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const childrens = React.Children.toArray(children) as ReactElement[];
  const viewItemsLength = 5;
  const isMoving = useRef(false);

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 800);
  }, [current]);

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
          handleSlide={() =>
            !isMoving.current && setCurrent((prev) => prev - 1)
          }
        />
      )}
      {current + 1 < Math.ceil(childrens.length / viewItemsLength) && (
        <SlideButton
          multiCarousel={true}
          next
          handleSlide={() =>
            !isMoving.current && setCurrent((prev) => prev + 1)
          }
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  @media (max-width: ${breakpoints.tablet}) {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0 !important;
      display: none;
    }
  }
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
  @media (max-width: ${breakpoints.desktopSmall}) {
    --slideWidth: calc(80vw / 3);
  }
  @media (max-width: ${breakpoints.tablet}) {
    --slideWidth: calc(90vw / 3);
    transform: none;
  }
`;

const Slide = styled.div<{
  current: number;
  length: number;
}>`
  width: var(--slideWidth);
  padding: 0.5rem;
`;
