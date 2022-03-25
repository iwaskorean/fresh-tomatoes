import Seo from '@layouts/app/Seo/Seo';
import Custom500PageLayout from '@layouts/customError/500';

export default function InternalServerError() {
  return (
    <>
      <Seo title='Error: Internal Sever Error' />
      <Custom500PageLayout />
    </>
  );
}
