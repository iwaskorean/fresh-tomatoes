import Image from 'next/image';
import TippedPopcornImage from '@assets/images/tipped-popcorn.svg';
import CustomErrorPageLayout from '../Layout';
import Code from '../Code';
import Message from '../Message';
import Button from '../Button';

export default function Custom404PageLayout() {
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
      <Code style={{ color: 'red' }}>404</Code>
      <Message>This page could not be found ...</Message>
      <Button>Back to Homepage</Button>
    </CustomErrorPageLayout>
  );
}
