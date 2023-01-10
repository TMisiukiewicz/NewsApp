import React from 'react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {TopStoriesResult} from '../../api/queries/useTopStories';
import NewsTile from '../NewsTile';
import {useReadLaterStore} from '../../store';
import {Text} from 'react-native-paper';

interface NewsListProps {
  data: TopStoriesResult[] | undefined;
  onRefresh?: () => void;
  isFetching: boolean;
}

const NewsList = ({data, onRefresh, isFetching}: NewsListProps) => {
  const readLater = useReadLaterStore(state => state.articles);
  const saveForReading = useReadLaterStore(state => state.addArticle);
  const removeFromList = useReadLaterStore(state => state.removeArticle);

  const renderItem: ListRenderItem<TopStoriesResult> = ({item}) => {
    const {title, abstract, url, multimedia} = item;
    const image = multimedia.find(
      img => img.format === 'threeByTwoSmallAt2X',
    )?.url;
    const isBookmarked = Boolean(readLater.find(news => news.title === title));

    return (
      <NewsTile
        {...{title, abstract, url, image, isBookmarked}}
        onBookmark={() =>
          !isBookmarked ? saveForReading(item) : removeFromList(item)
        }
      />
    );
  };

  return (
    <FlashList
      {...{data, renderItem, onRefresh}}
      refreshing={onRefresh ? isFetching : undefined}
      contentContainerStyle={{paddingVertical: 10}}
      ListEmptyComponent={<Text>No items to show</Text>}
      estimatedItemSize={373}
      showsVerticalScrollIndicator={false}
      extraData={readLater}
    />
  );
};

export default NewsList;
