import Heading from '@components/Heading/Heading';
import Nav from '@components/Nav/Nav';
import Poster from '@components/Poster/Poster';
import Posters from '@layouts/trending/Posters';
import { navItems, TrendingPageLayoutProps } from './index';

interface MediaTypeTrendingPageLayoutProps extends TrendingPageLayoutProps {
  category: string | string[];
}

export default function MediaTypeTrendingPageLayout({
  results,
  category,
}: MediaTypeTrendingPageLayoutProps) {
  return (
    <>
      <Nav items={navItems} />
      <Heading>Trending: {category || ''}</Heading>
      <Posters>
        {results?.map((result) => (
          <Poster
            key={result.id}
            src={result.profile_path || result.poster_path || '-'}
            title={result.name || result.title}
            vote={result.vote_average}
            contentId={result.id}
            mediaType={result.media_type}
          />
        ))}
      </Posters>
    </>
  );
}
