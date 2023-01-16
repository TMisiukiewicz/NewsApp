import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import debounce from 'lodash/debounce';
import {TextInput, View} from 'react-native';
import {Appbar, Searchbar} from 'react-native-paper';
import useArticleSearch from '../../api/queries/useArticleSearch';
import {TopStoriesResult} from '../../api/queries/useTopStories';
import Loader from '../../components/Loader';
import SearchList from '../../components/SearchList';

const SearchScreen = () => {
  const [results, setResults] = useState<
    Pick<TopStoriesResult, 'title' | 'abstract' | 'url' | 'multimedia'>[]
  >([]);
  const [query, setQuery] = useState('');
  const inputRef = useRef<TextInput | null>(null);
  const {
    refetch: searchArticles,
    isFetching,
    isLoading,
    isInitialLoading,
  } = useArticleSearch(query, {
    enabled: false,
    retry: 0,
    onSuccess(data) {
      if (data) {
        setResults(
          data.response.docs.map(doc => ({
            title: doc.headline.main,
            abstract: doc.abstract,
            url: doc.web_url,
            multimedia: doc.multimedia,
          })),
        );
      }
    },
  });

  const debouncedSearchArticles = debounce(() => searchArticles(), 700);

  useEffect(() => {
    if (query !== '') {
      debouncedSearchArticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useFocusEffect(
    useCallback(() => {
      if (inputRef) {
        inputRef.current?.focus();
      }
    }, []),
  );

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Search" />
      </Appbar.Header>
      <Searchbar
        ref={inputRef}
        placeholder="Search"
        onChangeText={text => setQuery(text.toLowerCase())}
        value={query}
      />
      {isInitialLoading && isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Loader />
        </View>
      ) : (
        <SearchList data={results} {...{isFetching}} />
      )}
    </>
  );
};

export default SearchScreen;
