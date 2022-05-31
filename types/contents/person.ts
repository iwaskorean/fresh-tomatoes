export interface IPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for: {
    adult: boolean;
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number | number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string | string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    title: string;
  }[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}
