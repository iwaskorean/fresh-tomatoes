import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { CarouselProps } from '@components/Carousel/Carousel';
import SlideButton from '@components/Carousel/SlideButton';
import { breakpoints } from 'GlobalStyle';
import { desktopSmall, mobile, tablet } from '@utils/responsive';
import styled from '@emotion/styled';

export default function MultiCarousel({ children, ...props }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const childrens = React.Children.toArray(children);
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
          <Slide
            key={i}
            current={current}
            length={childrens.length}
            viewItemsLength={viewItemsLength}
          >
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

interface StylingProps {
  current: number;
  length: number;
  viewItemsLength: number;
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  ${tablet(`
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0 !important;
      display: none;
    }`)}
`;

const Inner = styled.div<StylingProps>`
  width: calc(
    80vw / ${({ viewItemsLength }) => viewItemsLength} *
      ${({ length }) => length}
  );
  display: flex;
  transform: translate3d(${({ current }) => current * -80}vw, 0, 0);
  transition: transform 0.6s ease-in-out;

  @media (max-width: ${breakpoints.desktopSmall}) {
    width: calc(80vw / 3 * ${({ length }) => length});
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(90vw / 3 * ${({ length }) => length});
    transform: none;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: calc(85vw / 2 * ${({ length }) => length});
    transform: none;
  }
`;

const Slide = styled.div<StylingProps>`
  width: calc(80vw / ${({ viewItemsLength }) => viewItemsLength});
  padding: 0.5rem;
  ${desktopSmall({ width: 'calc(80vw / 3)' })};
  ${tablet({ width: 'calc(90vw / 3)' })};
  ${mobile({ width: 'calc(85vw / 2)' })};
`;
