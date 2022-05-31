import { HTMLAttributes, RefObject } from 'react';
import styled from '@emotion/styled';
import React from 'react';

interface SelectBoxProps extends HTMLAttributes<HTMLDivElement> {
  selectRef: RefObject<HTMLDivElement>;
  show: boolean;
  handleShow(): void;
  mediaType: string;
  handleMediaType(mediaType: string): void;
  alert: boolean;
}

function SelectBox({
  selectRef,
  show,
  handleShow,
  mediaType,
  handleMediaType,
  alert,
  ...props
}: SelectBoxProps) {
  return (
    <Select ref={selectRef} {...props}>
      <Toggle onClick={handleShow} mediaType={mediaType} alert={alert}>
        {mediaType || 'Media Type'}
      </Toggle>

      <Group show={show}>
        <Item onClick={() => handleMediaType('Movie')}>Movie</Item>
        <Item onClick={() => handleMediaType('TV')}>TV</Item>
      </Group>
    </Select>
  );
}

export default React.memo(SelectBox);

const Select = styled.div`
  width: 8rem;
  background-color: var(--white);
  font-size: 0.9em;
  margin-right: 0.2rem;
`;

const Toggle = styled.button<{ alert: boolean; mediaType: string }>`
  width: 100%;
  height: 100%;
  font-size: 1.1em;
  padding: 0.3rem;
  outline: none;
  background-color: var(--white);
  border: none;
  cursor: pointer;

  ${({ mediaType, alert }) =>
    mediaType === '' &&
    alert &&
    `
  border: 3px solid var(--red);
  box-sizing: content-box important!;
  `};

  &:after {
    display: inline-block;
    margin-left: 0.5rem;
    vertical-align: 0.1rem;
    content: '';
    border-color: blue;
    border-top: 0.4rem solid var(--blue);
    border-right: 0.4rem solid transparent;
    border-bottom: 0;
    border-left: 0.4rem solid transparent;
  }
`;

const Group = styled.div<{ show: boolean }>`
  position: absolute;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  width: 8rem;
  flex-direction: column;
  background-color: var(--white);

  border: 5px solid var(--blueHover);
  z-index: 1;
`;

const Item = styled.a`
  padding: 0.4rem 0;
  width: 90%;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--blueHover);
  }
  & + & {
    border-top: 1px solid var(--blue);
  }
`;
