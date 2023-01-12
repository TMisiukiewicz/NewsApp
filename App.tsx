import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import TabNavigator from './src/navigation/TabNavigator';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider {...{client}}>
      <PaperProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
};

export default App;
