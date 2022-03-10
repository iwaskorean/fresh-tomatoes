import Image from 'next/image';
import Rotten from '@assets/images/rotten.svg';
import Fresh from '@assets/images/fresh.svg';
import Certified from '@assets/images/certified.svg';
import Unavailable from '@assets/images/unavailable.svg';

export const getTomatoMeter = (voteAverage: number) => {
  const votePercent = voteAverage * 10;
  if (votePercent === 0) {
    return <Image src={Unavailable} alt='unavailable score' />;
  }
  if (votePercent >= 80) {
    return <Image src={Certified} alt='certified tomato' />;
  }
  if (votePercent >= 60) {
    return <Image src={Fresh} alt='fresh tomato' />;
  }

  return <Image src={Rotten} alt='rotten tomato' />;
};
