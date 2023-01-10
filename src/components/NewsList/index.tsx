import React from 'react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {TopStoriesResult} from '../../api/queries/useTopStories';
import NewsTile from '../NewsTile';

interface NewsListProps {
  data: TopStoriesResult[] | undefined;
  onRefresh: () => void;
  isFetching: boolean;
}

const NewsList = ({data, onRefresh, isFetching}: NewsListProps) => {
  const renderItem: ListRenderItem<TopStoriesResult> = ({item}) => {
    const {title, abstract, url, multimedia} = item;
    const image = multimedia.find(
      img => img.format === 'threeByTwoSmallAt2X',
    )?.url;

    return <NewsTile {...{title, abstract, url, image}} />;
  };

  return (
    <FlashList
      {...{data, renderItem, onRefresh}}
      refreshing={isFetching}
      contentContainerStyle={{paddingVertical: 10}}
      estimatedItemSize={100}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NewsList;
