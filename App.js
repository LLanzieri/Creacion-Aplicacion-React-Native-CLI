import Home from './src/Screens/Home';
import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { styles } from './src/Styles/Styles_App';

const App = () => {

  return (
    <SafeAreaView style={styles.mainContainer}>

      <Home />

    </SafeAreaView>
  );
};

export default App;
