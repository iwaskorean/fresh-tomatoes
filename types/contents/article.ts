export interface IArticle {
  byline: string;
  critics_pick: number;
  date_updated: string;
  display_title: string;
  headline: string;
  link: {
    type: string;
    url: string;
    suggested_link_text: string;
  };
  mpaa_rating: string;
  multimedia: { type: string; src: string; height: number; width: number };
  opening_date: null;
  publication_date: string;
  summary_short: string;
}
