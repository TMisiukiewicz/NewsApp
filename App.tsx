import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView, View} from 'react-native';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider {...{client}}>
      <SafeAreaView>
        <View />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
