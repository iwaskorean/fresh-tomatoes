import Heading from '@components/Heading/Heading';
import Nav from '@components/Nav/Nav';
import Poster from '@components/Poster/Poster';
import Posters from '@layouts/trending/Posters';
import { ResultType } from 'pages/trending';

export interface TrendingPageLayoutProps {
  results: ResultType[];
}

export const navItems = [
  { text: 'all', url: 'trending' },
  { text: 'movie', url: 'trending/movie' },
  { text: 'tv', url: 'trending/tv' },
  { text: 'person', url: 'trending/person' },
];

export default function TrendingPageLayout({
  results,
}: TrendingPageLayoutProps) {
  return (
    <>
      <Nav items={navItems} />
      <Heading>Trending: All</Heading>
      <Posters>
        {results.map((result) => (
          <Poster
            key={result.id}
            src={result.poster_path}
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
