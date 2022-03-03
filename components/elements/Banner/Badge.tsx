import styled from '@emotion/styled';

export default function Badge({ children }: { children: string }) {
  return <Container>{children}</Container>;
}

const Container = styled.span`
  padding: 0.4rem 0.7rem;
  background-color: var(--blue);
  font-size: 0.8rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  letter-spacing: 1px;
  color: var(--white);
  font-weight: var(--font-bold);
  border-radius: 3px;
`;
