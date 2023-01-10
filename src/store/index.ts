import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {persist} from 'zustand/middleware';
import {TopStoriesResult} from '../api/queries/useTopStories';

interface ReadLaterStore {
  articles: TopStoriesResult[];
  addArticle: (article: TopStoriesResult) => void;
  removeArticle: (article: TopStoriesResult) => void;
}
const useReadLaterStore = create<ReadLaterStore>()(
  persist(
    set => ({
      articles: [],
      addArticle: article =>
        set(state => ({articles: [article, ...state.articles]})),
      removeArticle: article =>
        set(state => ({
          articles: [
            ...state.articles.filter(({title}) => title !== article.title),
          ],
        })),
    }),
    {
      name: 'read-later',
      getStorage: () => AsyncStorage,
    },
  ),
);

export {useReadLaterStore};
