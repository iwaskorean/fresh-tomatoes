import Seo from '@layouts/app/Seo/Seo';
import Upcoming from './Upcoming';
import Headline from './Headline';
import { IArticle, IPerson, IUpcomingMovie } from '@type/index';
import Lists from './Lists';
import InfScrollContainer from './InfScrollContainer';
import Heading from '@components/Heading/Heading';

interface HomeLayoutProps {
  articles: IArticle[];
  people: IPerson[];
  upcomingMovies: IUpcomingMovie[];
}

export default function HomeLayout({
  articles,
  people,
  upcomingMovies,
}: HomeLayoutProps) {
  return (
    <>
      <Seo title='Home' />
      <Headline articles={articles} people={people} />
      <Upcoming upcomingMovies={upcomingMovies} />
      <Lists />
      <Heading style={{ marginTop: '1rem' }}>Top Rated Movies</Heading>
      <InfScrollContainer />
    </>
  );
}
