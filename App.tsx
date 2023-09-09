import React from 'react';
import Rootnavigation from './src/navigation/rootNavigation';
import { SafeAreaView } from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Rootnavigation />
    </SafeAreaView>
  );
};
export default App
