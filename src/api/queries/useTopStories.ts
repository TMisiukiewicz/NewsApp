import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import apis from '../apis';
import api from '../axios';

export const categories = [
  'books',
  'business',
  'fashion',
  'food',
  'health',
  'home',
  'movies',
  'politics',
  'science',
  'sports',
  'technology',
  'travel',
  'world',
] as const;

export type TopStoriesCategory = (typeof categories)[number];

export interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export interface TopStoriesResult {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: Multimedia[];
  short_url: string;
}

export interface TopStoriesResponse {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: TopStoriesResult[];
}

interface TopStoriesParams {
  category: TopStoriesCategory;
}
const useTopStories = (
  {category}: TopStoriesParams,
  options?: UseQueryOptions<TopStoriesResponse>,
) =>
  useQuery<TopStoriesResponse>(
    ['topstories', category],
    async () => {
      const {data} = await api.get(apis.topStories(category));

      return data;
    },
    options,
  );

export default useTopStories;
