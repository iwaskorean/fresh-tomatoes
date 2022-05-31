import Avatar, { AvatarProps } from './Avatar';
import Info, { InfoProps } from './Info';
import styled from '@emotion/styled';

type ProfileProps = AvatarProps & InfoProps;

export default function Profile({ src, name, email, ...props }: ProfileProps) {
  return (
    <Wrapper {...props}>
      <Avatar src={src} />
      <Info name={name} email={email} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
