import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.fondo}>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <CalculadoraScreen/>
      </SafeAreaView>
    )
  }
}

export default App;