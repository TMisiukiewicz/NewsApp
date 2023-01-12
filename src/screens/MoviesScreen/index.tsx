import React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import useMovieReviewPicks from '../../api/queries/useMovieReviewPicks';
import Loader from '../../components/Loader';
import MovieList from '../../components/MovieList';

const MoviesScreen = () => {
  const {isLoading, data, isFetching, refetch} = useMovieReviewPicks();
  const {results} = data || {};

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Movies reviews" />
      </Appbar.Header>
      <View style={{flex: 1}}>
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Loader />
          </View>
        ) : (
          <MovieList
            data={results}
            {...{isFetching}}
            onRefresh={() => refetch()}
          />
        )}
      </View>
    </>
  );
};

export default MoviesScreen;
