import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.texto}>¡Hola, Coder!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    /* borderColor: 'red',
    borderWidth: 2 */
  },

  textContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    /* borderColor: 'blue',
    borderWidth: 2, */
  },
  texto: {
    textAlign: 'center',
  }
});

export default App;
