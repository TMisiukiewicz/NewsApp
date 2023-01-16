import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import apis from '../apis';
import api from '../axios';

export interface Headline {
  main: string;
  kicker?: any;
  content_kicker?: any;
  print_headline?: any;
  name?: any;
  seo?: any;
  sub?: any;
}

export interface Keyword {
  name: string;
  value: string;
  rank: number;
  major: string;
}

export interface Byline {
  original?: any;
  person: any[];
  organization?: any;
}

export interface Doc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: any[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name: string;
  byline: Byline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}

export interface Meta {
  hits: number;
  offset: number;
  time: number;
}

export interface ArticleSearch {
  docs: Doc[];
  meta: Meta;
}

export interface ArticleSearchResponse {
  status: string;
  copyright: string;
  response: ArticleSearch;
}

const useArticleSearch = (
  query: string,
  options?: UseQueryOptions<ArticleSearchResponse>,
) =>
  useQuery<ArticleSearchResponse>(
    ['search', query],
    async () => {
      const {data} = await api.get(apis.search(query));

      return data;
    },
    options,
  );

export default useArticleSearch;
