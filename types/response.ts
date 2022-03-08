import { IArticle } from './article';
import { IMovie, IUpcomingMovie } from './movie';
import { IPerson } from './person';

export interface IMovieResponse<T> {
  dates: { maximum: number; minimum: number };
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface IArticleResponse {
  status: string;
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: IArticle[];
}

export interface IPeopleResponse {
  page: number;
  results: IPerson[];
}
