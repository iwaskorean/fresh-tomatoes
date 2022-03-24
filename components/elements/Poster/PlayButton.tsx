import { ButtonHTMLAttributes } from 'react';
import Image from 'next/image';
import PlayIcon from '@assets/icons/play-icon.png';
import styled from '@emotion/styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick(isShow: boolean): void;
}

export default function PlayButton({ handleClick, ...props }: ButtonProps) {
  return (
    <Button onClick={() => handleClick(true)} {...props}>
      <Image src={PlayIcon} alt='play' />
    </Button>
  );
}

const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 4px);
  cursor: pointer;
  border: none;
  outline: 0;
  background: rgba(0 0 0 / 0.2);
  border-radius: 0.8rem;

  span {
    width: 4rem !important;
    opacity: 0.9 !important;
  }
`;
