import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainStack from './src/navigation/MainStack';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider {...{client}}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
