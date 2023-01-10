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
  const saveForReading = useReadLaterStore(state => state.addArticle);

  const renderItem: ListRenderItem<TopStoriesResult> = ({item}) => {
    const {title, abstract, url, multimedia} = item;
    const image = multimedia.find(
      img => img.format === 'threeByTwoSmallAt2X',
    )?.url;

    return (
      <NewsTile
        {...{title, abstract, url, image}}
        onBookmark={() => saveForReading(item)}
      />
    );
  };

  return (
    <FlashList
      {...{data, renderItem, onRefresh}}
      refreshing={onRefresh ? isFetching : undefined}
      contentContainerStyle={{paddingVertical: 10}}
      estimatedItemSize={100}
      ListEmptyComponent={<Text>No items to show</Text>}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NewsList;
