import { HTMLAttributes, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Overlay from './Overlay';
import styled from '@emotion/styled';

interface ModalProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  show: boolean;
  handleShow(): void;
}

export default function Modal({
  show,
  handleShow,
  children,
  ...props
}: ModalProps) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return createPortal(
    <>
      {show && (
        <Wrapper {...props}>
          <Overlay handleShow={handleShow} />
          <Content>{children}</Content>
        </Wrapper>
      )}
    </>,
    document.body
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

const Content = styled.div`
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
