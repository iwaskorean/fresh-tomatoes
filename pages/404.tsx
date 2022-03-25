import Seo from '@layouts/app/Seo/Seo';
import Custom404PageLayout from '@layouts/customError/404';

export default function NotFound() {
  return (
    <>
      <Seo title='Error: Not Found' />
      <Custom404PageLayout />
    </>
  );
}
