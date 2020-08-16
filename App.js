import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Header from './src/components/Header';
import Card from './src/components/Card';

const loadFonts = () => {
  return Font.loadAsync({
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  //see splash screen while the font is loaded
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <View>
      <Header title="News App" />
      <Card />
    </View>
  );
}
