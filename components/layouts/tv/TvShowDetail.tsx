import Heading from '@components/Heading/Heading';
import DetailView from '@layouts/app/DetailView/DetailView';
import { ITVShowDetail } from '@type/tv';

interface TvShowDetailPageLayout {
  result: ITVShowDetail;
}

export default function TvShowDetailPageLayout({
  result,
}: TvShowDetailPageLayout) {
  const item = {
    title: result.name,
    overview: result.overview,
    poster: result.poster_path,
    releaseDate: result.first_air_date,
    runningTime: result.episode_run_time[0],
    genres: result.genres,
    homepage: result.homepage,
    tagline: result.tagline,
    vote: result.vote_average,
  };

  return (
    <>
      <Heading style={{ marginTop: '3rem' }}>TV Show Details</Heading>
      <DetailView item={item} />
    </>
  );
}
