import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import {TopStoriesResult} from '../api/queries/useTopStories';

interface ReadLaterStore {
  articles: TopStoriesResult[];
  addArticle: (article: TopStoriesResult) => void;
}
const useReadLaterStore = create<ReadLaterStore>()(
  persist(
    set => ({
      articles: [],
      addArticle: article =>
        set(state => ({articles: [article, ...state.articles]})),
    }),
    {
      name: 'read-later',
      getStorage: () => AsyncStorage,
    },
  ),
);

export {useReadLaterStore};
