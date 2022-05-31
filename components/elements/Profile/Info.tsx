import styled from '@emotion/styled';

export interface InfoProps {
  name?: string;
  email?: string;
}

export default function Info({ name, email, ...props }: InfoProps) {
  return <Wrapper {...props}>{name + ' | ' + email}</Wrapper>;
}

const Wrapper = styled.p`
  white-space: nowrap;
  display: none;
  position: absolute;
  top: calc(4.2rem + 60px);
  background-color: var(--white);
  padding: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 5px rgba(0 0 0 / 0.3);
`;
