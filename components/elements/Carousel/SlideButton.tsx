import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface SlideButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  prev?: boolean;
  next?: boolean;
  handleSlide(): void;
  multiCarousel?: boolean;
}

export default function SlideButton({
  prev = false,
  next = false,
  handleSlide,
  multiCarousel = false,
  ...props
}: SlideButtonProps) {
  return (
    <Button
      prev={prev}
      next={next}
      onClick={handleSlide}
      multiCarousel={multiCarousel}
      {...props}
    />
  );
}

const Button = styled.button<{
  prev: boolean;
  next: boolean;
  multiCarousel?: boolean;
}>`
  position: absolute;
  top: 50%;
  width: 35px;
  height: 35px;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--grayLight2);
  &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    top: 50%;
    border-right: 3px solid var(--grayDark1);
    border-bottom: 3px solid var(--grayDark1);
    transform: translate3d(-50%, -50%, 0) rotate(135deg);
  }
  ${({ prev, multiCarousel }) =>
    prev &&
    `
    left:${multiCarousel ? '0px' : '10px'};
    &:after {
      left: calc(50% + 1.5px);
    }
  `}
  ${({ next, multiCarousel }) =>
    next &&
    `
    right: ${multiCarousel ? '0px' : '10px'};
    &:after {
      left: calc(50% - 1.5px);
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`;
