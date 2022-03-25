import Image from 'next/image';
import TippedPopcornImage from '@assets/images/tipped-popcorn.svg';
import CustomErrorPageLayout from '../Layout';
import Code from '../Code';
import Message from '../Message';
import Button from '../Button';

export default function Custom500PageLayout() {
  return (
    <CustomErrorPageLayout>
      <Image
        src={TippedPopcornImage}
        layout='fixed'
        width={150}
        height={150}
        alt='not found'
        property='false'
      />
      <Code style={{ color: 'blue' }}>500</Code>
      <Message>Something went wrong ...</Message>
      <Button>Back to Homepage</Button>
    </CustomErrorPageLayout>
  );
}
