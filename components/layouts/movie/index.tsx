import { useRouter } from 'next/router';
import Card from '@components/Card/Card';
import CardList from '@components/Card/CardList';
import Heading from '@components/Heading/Heading';
import { IMovie } from '@type/movie';

interface MoviePageLayoutProps {
  results: IMovie[];
}

export default function MoviePageLayout({ results }: MoviePageLayoutProps) {
  const router = useRouter();

  return (
    <>
      <Heading style={{ marginTop: '3rem' }}>Most Popular Movies Today</Heading>
      <CardList style={{ width: '100%' }}>
        {results.map(({ id, title, overview, poster_path, release_date }) => {
          return (
            <Card
              key={id}
              contentId={id}
              mediaType={router.pathname.slice(1)}
              title={title}
              overview={overview}
              src={poster_path}
              releaseData={release_date}
            />
          );
        })}
      </CardList>
    </>
  );
}
