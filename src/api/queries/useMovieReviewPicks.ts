import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import apis from '../apis';
import api from '../axios';

export interface Link {
  type: string;
  url: string;
  suggested_link_text: string;
}

export interface Multimedia {
  type: string;
  src: string;
  height: number;
  width: number;
}

export interface Movie {
  display_title: string;
  mpaa_rating: string;
  critics_pick: number;
  byline: string;
  headline: string;
  summary_short: string;
  publication_date: string;
  opening_date?: any;
  date_updated: string;
  link: Link;
  multimedia: Multimedia;
}

export interface MovieReviewPicksResponse {
  status: string;
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: Movie[];
}

const useMovieReviewPicks = (
  options?: UseQueryOptions<MovieReviewPicksResponse>,
) =>
  useQuery<MovieReviewPicksResponse>(
    ['moviePicks'],
    async () => {
      const {data} = await api.get(apis.reviewPicks());

      return data;
    },
    options,
  );

export default useMovieReviewPicks;
