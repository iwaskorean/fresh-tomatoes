import styled from '@emotion/styled';

export interface AvatarProps {
  src: string;
}

export default function Avatar({ src, ...props }: AvatarProps) {
  return <Wrapper src={src} {...props} />;
}

const Wrapper = styled.div<{ src: string }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-size: cover;
  z-index: 1;
  &:hover {
    + p {
      display: block;
    }
  }
`;
