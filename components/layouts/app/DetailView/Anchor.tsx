import styled from '@emotion/styled';

export default function Anchor({ homepage }: { homepage: string }) {
  return (
    <StyledAnchor target='_blank' href={homepage} rel='noopener noreferrer'>
      See more details
    </StyledAnchor>
  );
}

const StyledAnchor = styled.a`
  width: 12rem;
  text-align: center;
  text-decoration: none;
  border: none;
  font-size: 1.1rem;
  background-color: var(--blue);
  color: var(--white);
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  &:hover {
    background-color: var(--blueHover);
  }
`;
