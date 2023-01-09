import {useQuery} from '@tanstack/react-query';
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

interface TopStoriesParams {
  category: TopStoriesCategory;
}
const useTopStories = ({category}: TopStoriesParams) =>
  useQuery(['topstories', category], async () => {
    const {data} = await api.get(apis.topStories(category));

    return data;
  });

export default useTopStories;
