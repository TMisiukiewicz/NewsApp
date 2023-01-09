import {TopStoriesCategory} from './queries/useTopStories';

const apis = {
  topStories: (category: TopStoriesCategory) =>
    `/topstories/v2/${category}.json`,
};

export default apis;
