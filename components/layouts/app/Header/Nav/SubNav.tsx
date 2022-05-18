import { useState } from 'react';
import NavWrapper from './Wrapper';
import NavLink from './Link';
import { NavProps } from './Nav';
import Modal from '@components/Modal/Modal';
import { desktopSmall, tablet } from '@utils/responsive';
import styled from '@emotion/styled';

export default function SubNav({ items }: NavProps) {
  const [showSocials, setShowSocials] = useState(false);

  const handleShowSocials = (isShow: boolean) => {
    setShowSocials(isShow);
  };

  return (
    <SubNavWrapper>
      {items.map(({ title, path }) => (
        <NavLink key={title} href={`/${path}`} title={title} />
      ))}
      <Button onClick={() => handleShowSocials(true)}>Login</Button>
      {showSocials && (
        <Modal show={showSocials} handleShow={() => handleShowSocials(false)}>
          <Temp>Social Login</Temp>
        </Modal>
      )}
    </SubNavWrapper>
  );
}

const SubNavWrapper = styled(NavWrapper)`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 0;
  top: 0;
  a {
    font-size: 0.9rem;
  }
  ${desktopSmall({ justifyContent: 'flex-start' })};
  ${tablet({ justifyContent: 'space-between' })};
`;

const Button = styled.button`
  text-transform: uppercase;
  font-size: 0.9rem;
  color: var(--white);
  letter-spacing: 1px;
  padding: 0rem 0.3rem;
  font-family: var(--font-oswald);
  background-color: transparent;
  outline: 0;
  margin: 0 1rem;
  border: none;
  cursor: pointer;
`;

const Temp = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
`;
