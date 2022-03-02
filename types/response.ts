import { IArticle } from './article';
import { IMovie } from './movie';
import { IPerson } from './person';

export interface IMovieResponse {
  dates: { maximum: number; minimum: number };
  page: number;
  results: IMovie[];
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
