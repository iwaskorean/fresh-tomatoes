import { useRouter } from 'next/router';
import Card from '@components/Card/Card';
import CardList from '@components/Card/CardList';
import Heading from '@components/Heading/Heading';
import { ITVShow } from '@type/tv';

interface TvPageLayoutProps {
  results: ITVShow[];
}

export default function TvPageLayout({ results }: TvPageLayoutProps) {
  const router = useRouter();

  return (
    <>
      <Heading style={{ marginTop: '3rem' }}>
        Most Popular TV show Today
      </Heading>
      <CardList style={{ width: '100%' }}>
        {results.map(({ id, name, overview, poster_path, first_air_date }) => {
          return (
            <Card
              key={id}
              title={name}
              overview={overview}
              src={poster_path}
              releaseData={first_air_date}
              mediaType={router.pathname.slice(1)}
              contentId={id}
            />
          );
        })}
      </CardList>
    </>
  );
}
