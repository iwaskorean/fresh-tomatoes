import Image, { ImageProps } from 'next/image';
import LogoImage from '@assets/images/logo.svg';
import styled from '@emotion/styled';

export default function Logo() {
  return (
    <StyledLogo
      src={LogoImage}
      width={180}
      layout='fixed'
      alt='Fresh Tomatoes Logo'
    />
  );
}

const StyledLogo = styled(Image)``;
