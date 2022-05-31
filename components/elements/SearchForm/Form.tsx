import { FormHTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import React from 'react';

interface FormProps
  extends PropsWithChildren<FormHTMLAttributes<HTMLFormElement>> {}

export default function Form({ children, ...props }: FormProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.form`
  display: flex;
`;
