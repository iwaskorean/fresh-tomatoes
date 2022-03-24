import Heading from '@components/Heading/Heading';
import DetailView from '@layouts/app/DetailView/DetailView';
import { IMovieDetail } from '@type/movie';

interface MovieDetailPageLayoutProps {
  result: IMovieDetail;
}

export default function MovieDetailPageLayout({
  result,
}: MovieDetailPageLayoutProps) {
  const item = {
    title: result.title,
    overview: result.overview,
    poster: result.poster_path,
    releaseDate: result.release_date,
    runningTime: result.runtime,
    genres: result.genres,
    homepage: result.homepage,
    tagline: result.tagline,
    vote: result.vote_average,
  };

  return (
    <>
      <Heading style={{ marginTop: '3rem' }}>Movie Details</Heading>
      <DetailView item={item} />
    </>
  );
}
