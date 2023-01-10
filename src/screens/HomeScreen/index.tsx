import React from 'react';
import {View} from 'react-native';
import useTopStories from '../../api/queries/useTopStories';
import Loader from '../../components/Loader';
import NewsList from '../../components/NewsList';

const HomeScreen = () => {
  const {data, isLoading, refetch, isFetching} = useTopStories({
    category: 'home',
  });

  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Loader />
        </View>
      ) : (
        <NewsList
          data={data?.results}
          onRefresh={() => refetch()}
          {...{isFetching}}
        />
      )}
    </View>
  );
};

export default HomeScreen;
