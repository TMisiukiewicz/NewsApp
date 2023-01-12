import {TopStoriesCategory} from './queries/useTopStories';

const apis = {
  topStories: (category: TopStoriesCategory) =>
    `/topstories/v2/${category}.json`,
  reviewPicks: () => '/movies/v2/reviews/picks.json',
};

export default apis;
