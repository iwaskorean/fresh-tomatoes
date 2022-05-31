import Image from 'next/image';
import Rotten from '@assets/images/rotten.svg';
import Fresh from '@assets/images/fresh.svg';
import Certified from '@assets/images/certified.svg';
import Unavailable from '@assets/images/unavailable.svg';

export default function MeterImage({ voteAverage }: { voteAverage: number }) {
  if (!voteAverage) {
    return <Image src={Unavailable} alt='unavailable score' />;
  }
  if (voteAverage >= 8) {
    return <Image src={Certified} alt='certified tomato' />;
  }
  if (voteAverage >= 6) {
    return <Image src={Fresh} alt='fresh tomato' />;
  }

  return <Image src={Rotten} alt='rotten tomato' />;
}
