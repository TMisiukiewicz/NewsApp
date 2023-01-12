import React from 'react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {Text} from 'react-native-paper';
import {Movie} from '../../api/queries/useMovieReviewPicks';
import MovieTile from '../MovieTile';

interface MovieListProps {
  data: Movie[] | undefined;
  onRefresh?: () => void;
  isFetching: boolean;
}

const MovieList = ({data, onRefresh, isFetching}: MovieListProps) => {
  const renderItem: ListRenderItem<Movie> = ({item}) => {
    const {headline, summary_short, link, multimedia} = item;
    const image = multimedia.src;

    return (
      <MovieTile
        title={headline}
        abstract={summary_short}
        url={link.url}
        {...{image}}
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
    />
  );
};

export default MovieList;
