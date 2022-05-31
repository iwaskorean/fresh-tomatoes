import React, {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { useSession } from 'next-auth/react';
import Profile from '@components/Profile/Profile';
import { mobile } from '@utils/responsive';
import styled from '@emotion/styled';
import FilledHeartImage from '@assets/icons/heart-filled-icon.svg';
import Image from 'next/image';

interface StickyMenuProps
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

interface IUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  userId: string | null;
}

function StickyMenu({ children, ...props }: StickyMenuProps) {
  const [user, setUser] = useState<IUser>();
  const { data: session } = useSession();

  // to manage with global state
  useEffect(() => {
    if (session) {
      setUser({ ...session.user, userId: session.userId });
    }
  }, [session]);

  return (
    <Wrapper {...props}>
      {user && (
        <Image src={FilledHeartImage} alt='Like' width={60} height={60} />
      )}

      <Profile
        src={user?.image ?? ''}
        name={user?.name ?? ''}
        email={user?.email ?? ''}
      />
    </Wrapper>
  );
}

export default React.memo(StickyMenu);

const Wrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  ${mobile({ display: 'none' })}
`;
