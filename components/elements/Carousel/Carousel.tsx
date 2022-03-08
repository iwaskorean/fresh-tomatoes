import React, {
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import Slide from './Slide';
import SlideButton from './SlideButton';
import styled from '@emotion/styled';

export interface CarouselProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export default function Carousel({ children, ...props }: CarouselProps) {
  const [current, setCurrent] = useState(1);
  const [prev, setPrev] = useState(0);
  const isMoving = useRef(false);
  const childrens = React.Children.toArray(children) as ReactElement[];
  const slides = [childrens[childrens.length - 1], ...childrens, childrens[0]];

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 800);
  }, [current]);

  useEffect(() => {
    if (current === 0) {
      setTimeout(() => {
        setCurrent(slides.length - 2);
      }, 300);
    }
    if (current === slides.length - 1) {
      setTimeout(() => {
        setCurrent(1);
      }, 300);
    }
  }, [current, slides.length]);

  const handlePrev = () => {
    if (!isMoving.current) {
      setPrev(current);
      if (current === 0) {
        setCurrent(slides.length - 1);
      } else {
        setCurrent(current - 1);
      }
    }
  };

  const handleNext = () => {
    if (!isMoving.current) {
      setPrev(current);
      if (current === slides.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }
  };

  return (
    <Container {...props}>
      <Inner length={slides.length} current={current} prev={prev}>
        {slides.map((children: any, i: any) => {
          return <Slide key={i}>{children}</Slide>;
        })}
      </Inner>

      {slides.length > 1 && (
        <>
          <SlideButton prev handleSlide={handlePrev} />
          <SlideButton next handleSlide={handleNext} />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
  height: inherit;
`;

const Inner = styled.div<{
  length: number;
  current: number;
  prev: number;
}>`
  width: ${({ length }) => (length ? `calc(${length} * 100%)` : '100%')};
  position: relative;
  display: flex;
  transform: ${({ current, length }) =>
    `translate3d(calc(${current} * -100% / ${length}), 0, 0)`};
  height: inherit;

  transition: ${({ prev, current, length }) =>
    prev === 1 && current === length - 2
      ? 'transform 0s;'
      : prev === length - 2 && current === 1
      ? 'transform 0s;'
      : 'transform 0.33s;'};
`;
