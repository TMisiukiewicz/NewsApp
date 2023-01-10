import create from 'zustand';
import {TopStoriesResult} from '../api/queries/useTopStories';

interface ReadLaterStore {
  articles: TopStoriesResult[];
  addArticle: (article: TopStoriesResult) => void;
}
const useReadLaterStore = create<ReadLaterStore>(set => ({
  articles: [],
  addArticle: article =>
    set(state => ({articles: [article, ...state.articles]})),
}));

export {useReadLaterStore};
