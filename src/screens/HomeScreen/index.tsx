import React, {useState} from 'react';
import {View} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import useTopStories from '../../api/queries/useTopStories';
import Loader from '../../components/Loader';
import NewsList from '../../components/NewsList';
import {useReadLaterStore} from '../../store';

const view = ['list', 'bookmarks'] as const;

const HomeScreen = () => {
  const {data, isLoading, refetch, isFetching} = useTopStories({
    category: 'home',
  });
  const bookmarks = useReadLaterStore(store => store.articles);
  const [scene, setScene] = useState<(typeof view)[number]>('list');

  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Loader />
        </View>
      ) : (
        <>
          <SegmentedButtons
            density="small"
            style={{marginVertical: 10}}
            value={scene}
            onValueChange={setScene}
            buttons={[
              {value: 'list', label: 'Top stories'},
              {value: 'bookmarks', label: 'Bookmarks'},
            ]}
          />
          <NewsList
            data={scene === 'list' ? data?.results : bookmarks}
            onRefresh={scene === 'list' ? () => refetch() : undefined}
            {...{isFetching}}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
