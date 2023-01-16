import React from 'react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {TopStoriesResult} from '../../api/queries/useTopStories';
import NewsTile from '../NewsTile';
import {Text} from 'react-native-paper';

interface SearchListProps {
  data:
    | Pick<TopStoriesResult, 'title' | 'abstract' | 'url' | 'multimedia'>[]
    | undefined;
}

const SearchList = ({data}: SearchListProps) => {
  const renderItem: ListRenderItem<
    Pick<TopStoriesResult, 'title' | 'abstract' | 'url' | 'multimedia'>
  > = ({item}) => {
    const {title, abstract, url, multimedia} = item;
    const image = multimedia.find(
      img => img.format === 'threeByTwoSmallAt2X',
    )?.url;

    return <NewsTile {...{title, abstract, url, image}} />;
  };

  return (
    <FlashList
      {...{data, renderItem}}
      contentContainerStyle={{paddingVertical: 10}}
      ListEmptyComponent={<Text>No items to show</Text>}
      estimatedItemSize={373}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SearchList;
